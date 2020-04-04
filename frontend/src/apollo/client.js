import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const devEndpoint = 'http://localhost:5000'
const prodEndpoint = 'TBD'

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
  fetch,
  // local data
  clientState: {
    resolvers: {
      Mutation: {
        toggleCart: (_, variables, { cache }) => {}
      }
    },
    defaults: {
      cartOpen: false
    }
  }
})
