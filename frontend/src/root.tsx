import React from 'react'

import PersistApolloProvider from './graphql/apollo-root'

export const wrapRootElement = ({ element }: { element: any }) => {
    return <PersistApolloProvider>{element}</PersistApolloProvider>
}
