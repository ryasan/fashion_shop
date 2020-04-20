const { Prisma } = require('prisma-binding')

const { PRISMA_DEV_ENDPOINT, PRISMA_PROD_ENDPOINT } = process.env

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint:
    process.env.NODE_ENV === 'development'
      ? PRISMA_DEV_ENDPOINT
      : PRISMA_PROD_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
})

module.exports = db
