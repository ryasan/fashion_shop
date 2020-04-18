const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query.js')

const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: { Query },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
}

module.exports = createServer
