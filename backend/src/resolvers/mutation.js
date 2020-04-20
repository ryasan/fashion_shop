const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Mutation = {
  signup: async (parent, args, ctx, info) => {
    // hash their password
    const password = await bcrypt.hash(args.password, 10)
    // create the user in the database
    const user = await ctx.db.mutation.createUser({
      data: {
        email: args.email.toLowerCase(),
        username: args.username,
        password: password
      },
      info
    })
    // create JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    // set the jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    })
    // return the user to the browser
    return user
  }
}

module.exports = Mutation
