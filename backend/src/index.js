const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })
const createServer = require('./create-server.js')
const server = createServer()

server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cookieParser())

const { DEV_FRONTEND_URL, PROD_FRONTEND_URL } = process.env
const options = {
  cors: {
    credentials: true,
    origin:
      process.env.NODE_ENV === 'development'
        ? DEV_FRONTEND_URL
        : PROD_FRONTEND_URL
  },
  endpoint: '/',
  playground: '/playground'
}

server.start(options, deets =>
  console.log('Server is running on port: ', deets.port)
)
