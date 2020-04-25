const jwt = require('jsonwebtoken')

const throwError = (message = '') => {
  throw new Error(message)
}

const formatError = ({ message }) => {
  console.log(message)
  if (!message.startsWith('Oops')) {
    return { message: 'Internal server error' }
  }
  return {
    message: message.substr(5),
    name: 'CUSTOM_ERROR'
  }
}

// set the jwt as a cookie on the response
const createCookie = ({ ctx, userId }) => {
  const token = jwt.sign({ userId }, process.env.APP_SECRET)

  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
  })
}

module.exports = { createCookie, throwError, formatError }
