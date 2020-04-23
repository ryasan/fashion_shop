const { GraphQLServer } = require('graphql-yoga')

const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const db = require('./db')

const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: { Query, Mutation },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: (req) => ({ ...req, db })
  })
}

module.exports = createServer
