const jwt = require('jsonwebtoken')

const throwError = (message = '') => {
  throw new Error(message)
}

const formatError = ({ message }) => {
  if (!message.startsWith('Oops')) {
    return { message: 'Internal server error' }
  }
  return {
    message: message.substr(5),
    name: 'CUSTOM_ERROR'
  }
}

const isLoggedIn = ctx => {
  return ctx.request.userId
}

// set the jwt as a cookie on the response
const createCookie = ({ ctx, userId }) => {
  const token = jwt.sign({ userId }, process.env.APP_SECRET)
  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
  })
}

const hasPermission = (user, permissionsNeeded) => {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  )
  if (!matchedPermissions.length) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `)
  }
}

const permissionList = permissions => {
  return Object.entries(permissions)
    .filter(entry => entry[1])
    .map(entry => entry[0])
}

module.exports = {
  createCookie,
  throwError,
  formatError,
  isLoggedIn,
  hasPermission,
  permissionList
}
