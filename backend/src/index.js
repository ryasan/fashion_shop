const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env.prod'
})
const createServer = require('./create-server')
const db = require('./db')
const { formatError } = require('./utils')

const server = createServer()

server.express.use(logger('dev'))
server.express.use(express.json())
server.express.use(express.urlencoded({ extended: false }))
server.express.use(cookieParser())

const { DEV_FRONTEND_URL, PROD_FRONTEND_URL, APP_SECRET } = process.env

// put user on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const { userId } = jwt.verify(token, APP_SECRET)
    req.userId = userId
  }
  next()
})

server.express.use(async (req, res, next) => {
  if (!req.userId) return next()
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, email, username }'
  )

  req.user = user
  next()
})

const options = {
  cors: {
    credentials: true,
    origin: [
      process.env.NODE_ENV === 'development'
        ? DEV_FRONTEND_URL
        : PROD_FRONTEND_URL
    ]
  },
  endpoint: '/',
  playground: '/playground',
  formatError: formatError
}

server.start(options, (deets) =>
  console.log('Server is running on port: ', deets.port)
)
