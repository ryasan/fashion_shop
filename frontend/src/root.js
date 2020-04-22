import React from 'react'

import PersistApolloProvider from './graphql/apollo-root'

export const wrapRootElement = ({ element }) => {
  return <PersistApolloProvider>{element}</PersistApolloProvider>
}
