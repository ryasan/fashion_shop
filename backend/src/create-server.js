const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/query.js')
const Mutation = require('./resolvers/mutation.js')

const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: { Query, Mutation },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
}

module.exports = createServer
