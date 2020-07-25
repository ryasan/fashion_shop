const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { forwardTo } = require('prisma-binding')
const { randomBytes } = require('crypto')
const { promisify } = require('util')

const {
  throwError,
  createCookie,
  isLoggedIn,
  hasPermission
} = require('../utils')
const stripe = require('../stripe')
const { transport, makeANiceEmail } = require('../mail')

const Mutation = {
  createProduct: forwardTo('db'),
  updateProduct: forwardTo('db'),
  deleteProduct: forwardTo('db'),
  createCartItem: forwardTo('db'),
  uploadCart: async (parent, args, ctx, info) => {
    if (!isLoggedIn(ctx)) throwError('You must be signed in to upload cart.')
    const allCartItems = args.data
    const userId = ctx.request.userId

    await ctx.db.mutation.deleteManyCartItems({
      where: { user: { id: userId } }
    })

    for (const c of allCartItems) {
      await ctx.db.mutation.createCartItem(
        {
          data: {
            quantity: c.quantity,
            product: { connect: { id: c.productId } },
            user: { connect: { id: userId } }
          }
        },
        info
      )
    }

    return ctx.db.query.cartItems({ where: { user: { id: userId } } })
  },
  deleteMe: async (parent, args, ctx, info) => {
    await ctx.db.mutation.deleteUser({
      where: { id: ctx.request.userId }
    })

    ctx.response.clearCookie('token')

    return { message: 'Your account has successfully been removed' }
  },
  signin: async (parent, { email, password }, ctx, info) => {
    const user = await ctx.db.query.user({ where: { email } })

    if (!user) {
      throwError(`Oops: No such user found for email: ${email}`)
    }

    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (!passwordIsValid) {
      throwError('Oops: Incorrect Password')
    }

    // createCookie({ ctx, userId: user.id })
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    await ctx.response.cookie('token', token, {
      secure: true,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    })

    return ctx.db.query.user({ where: { email } }, info)
  },
  signout: async (parent, args, ctx, info) => {
    ctx.response.clearCookie('token')
    return { message: 'See you later!' }
  },
  signup: async (parent, args, ctx, info) => {
    args.email = args.email.toLowerCase()

    const emailExists = await ctx.db.exists.User({
      email_in: args.email
    })

    if (emailExists) throwError('Oops: Please choose a different email')

    const usernameExists = await ctx.db.exists.User({
      username_in: args.username
    })

    if (usernameExists) throwError('Oops: Username is already taken')

    const password = await bcrypt.hash(args.password, 10)

    const user = await ctx.db.mutation.createUser({
      data: {
        email: args.email.toLowerCase(),
        username: args.username,
        password: password,
        permissions: { set: ['USER'] }
      },
      info
    })
    createCookie({ ctx, userId: user.id })
    return user
  },
  createOrder: async (parent, args, ctx, info) => {
    if (!isLoggedIn(ctx)) {
      throwError('You must be signed in to complete this order')
    }
    const { userId } = ctx.request

    const user = await ctx.db.query.user(
      { where: { id: userId } },
      '{ id email username cart { id quantity product { title price id description sku } } }'
    )

    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.product.price * cartItem.quantity,
      0
    )

    const charge = await stripe.charges.create({
      amount,
      currency: 'USD',
      source: args.token
    })

    const orderItems = user.cart.map((cartItem) => {
      const orderItem = {
        ...cartItem.product,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } }
      }
      delete orderItem.id
      return orderItem
    })

    const order = await ctx.db.mutation.createOrder(
      {
        data: {
          total: charge.amount,
          chargeId: charge.id,
          orderItems: { create: orderItems },
          user: { connect: { id: userId } }
        }
      },
      info
    )

    await ctx.db.mutation.deleteManyCartItems({
      where: { user: { id: userId } }
    })

    return order
  },
  requestReset: async (parent, args, ctx, info) => {
    const user = await ctx.db.query.user({ where: { email: args.email } })
    if (!user) {
      throwError(`Oops: No such user found for email: ${args.email}`)
    }

    const randomBytesPromisified = promisify(randomBytes)
    const resetToken = (await randomBytesPromisified(20)).toString('hex')
    const resetTokenExpiry = Date.now() + 3600000

    await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    })

    await transport.sendMail({
      from: 'ryansantos86@gmail.com',
      to: user.email,
      subject: 'Your password reset token',
      html: makeANiceEmail(
        `Your password token is here!\n\n
        <a href="${process.env.DEV_FRONTEND_URL}/signin/reset/?resetToken=${resetToken}">
          Click here to reset
        </a>`
      )
    })

    return {
      message: 'Thanks. Please check your email for further instructions.'
    }
  },
  resetPassword: async (parent, args, ctx, info) => {
    if (args.password !== args.confirm) {
      throwError('Passwords do not match')
    }

    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    })
    if (!user) {
      throwError('This token is invalid or expired.')
    }

    const password = await bcrypt.hash(args.password, 10)
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: { password, resetToken: null, resetTokenExpiry: null }
    })

    createCookie({ ctx, userId: updatedUser.id })
    return updatedUser
  },
  updatePermissions: async (parent, args, ctx, info) => {
    if (!isLoggedIn(ctx)) {
      throwError('You must be logged in to perform this action.')
    }
    const currentUser = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    )

    hasPermission(currentUser, ['ADMIN', 'PERMISSION_UPDATE'])

    return ctx.db.mutation.updateUser(
      {
        where: { id: args.userId },
        data: { permissions: { set: args.permissions } }
      },
      info
    )
  }
}

module.exports = Mutation
