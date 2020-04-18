import React, { useState, useEffect } from 'react'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import styled from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

import LoaderComponent from '../components/loader'
import { Mutation } from './local-resolvers'
import { cartInitialState } from './cart/reducer'

const devEndpoint = 'http://localhost:5000'
const prodEndpoint = 'TBD'

const Loader = styled(LoaderComponent)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`

const PersistApolloProvider = ({ children }) => {
  const [client, setClient] = useState(null)

  useEffect(() => {
    const cache = new InMemoryCache()
    const client = new ApolloClient({
      uri: process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
      clientState: {
        resolvers: { Mutation },
        defaults: cartInitialState
      },
      fetch: fetch,
      cache: cache
    })

    persistCache({ cache, storage: window.localStorage }).then(() => {
      setClient(client)
    })

    return () => {}
  }, [])

  if (!client) return <Loader modifiers={['dark', 'darkColor']} />

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export const ApolloRoot = ({ element }) => {
  return <PersistApolloProvider>{element}</PersistApolloProvider>
}
