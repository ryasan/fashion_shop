const bcrypt = require('bcryptjs')
const { forwardTo } = require('prisma-binding')
const { randomBytes } = require('crypto')
const { promisify } = require('util')

const { throwError, createCookie } = require('../utils')
const stripe = require('../stripe')

const Mutation = {
  createProduct: forwardTo('db'),
  updateProduct: forwardTo('db'),
  deleteProduct: forwardTo('db'),
  createCartItem: forwardTo('db'),
  uploadCart: async (parent, args, ctx, info) => {
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

    createCookie({ ctx, userId: user.id })
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
        password: password
      },
      info
    })
    createCookie({ ctx, userId: user.id })
    return user
  },
  createOrder: async (parent, args, ctx, info) => {
    const { userId } = ctx.request
    if (!userId) throwError('You must be signed in to complete this order')

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

    return { message: "Thanks. You're request has been processed." }
  },
  resetPassword: async (parent, args, ctx, info) => {}
}

module.exports = Mutation
