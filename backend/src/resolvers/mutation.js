const bcrypt = require('bcryptjs')

const Mutation = {
  signup: async (parent, args, ctx, info) => {
    // lowercase their email
    const email = args.email.toLowerCase()
    const username = args.username
    // hash their password
    const password = await bcrypt.hash(args.password, 10)
    console.log(email, username, password)
    // create the user in the database
    // create JWT token for them
    // set the jwt as a cookie on the response
    // return the user to the browser
    return {}
  }
}

module.exports = Mutation
