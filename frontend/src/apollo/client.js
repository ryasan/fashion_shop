import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { LOCAL_STATE_QUERY } from '../graphql/local-state-requests'

const devEndpoint = 'http://localhost:5000'
const prodEndpoint = 'TBD'

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
  fetch,
  // local data
  clientState: {
    resolvers: {
      Mutation: {
        toggleCart: (_, variables, { cache }) => {
          const { cartOpen } = cache.readQuery({ query: LOCAL_STATE_QUERY })
          const data = { data: { cartOpen: !cartOpen } }
          cache.writeData(data)
          return data
        }
      }
    },
    defaults: {
      cartOpen: false
    }
  }
})
