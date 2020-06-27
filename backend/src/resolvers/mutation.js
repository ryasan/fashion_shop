const bcrypt = require('bcryptjs')
const { forwardTo } = require('prisma-binding')

const { throwError, createCookie } = require('../utils')

const Mutation = {
  createProduct: forwardTo('db'),
  updateProduct: forwardTo('db'),
  deleteProduct: forwardTo('db'),
  createCartItem: forwardTo('db'),
  syncUserCartWithRemote: async (parent, args, ctx, info) => {
    const allCartItems = args.data
    const userId = ctx.request.userId

    for (const c of allCartItems) {
      const cartItemExists = await ctx.db.exists.CartItem({
        AND: [{ user: { id: userId } }, { product: { id: c.productId } }]
      })

      // if cart item exists update quantity
      if (cartItemExists) {
        const [{ id: cartItemId }] = await ctx.db.query.cartItems({
          where: { product: { id: c.productId } }
        })
        await ctx.db.mutation.updateCartItem({
          data: { quantity: c.quantity },
          where: { id: cartItemId },
          info
        })
      }

      // if cart item does not exist create users new cart item
      if (!cartItemExists) {
        await ctx.db.mutation.createCartItem({
          data: {
            quantity: c.quantity,
            product: { connect: { id: c.productId } },
            user: { connect: { id: userId } }
          },
          info
        })
      }
    }
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
    return user
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
  }
}

module.exports = Mutation
