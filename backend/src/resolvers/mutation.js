const bcrypt = require('bcryptjs')
const { forwardTo } = require('prisma-binding')

const { throwError, createCookie } = require('../utils')

const Mutation = {
  createProduct: async (parent, { data, sizes }, ctx, info) => {
    const product = await ctx.db.mutation.createProduct({ data }, info)

    for (const s of sizes) {
      const sizeExists = await ctx.db.exists.Size({ name: s })
      const size = await ctx.db.query.Size({ name: s })
      if (sizeExists) {
        ctx.db.mutation.updateSize({
          where: { id: size.id },
          data: { name: s, products: { set: [...size.products, product.id] } }
        })
      } else {
        ctx.db.mutation.createSize({
          data: {
            name: s,
            products: { set: [product.id] }
          }
        })
      }
    }

    return product
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
  },
  updateProduct: forwardTo('db')
}

module.exports = Mutation
