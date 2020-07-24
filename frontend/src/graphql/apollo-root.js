import React, { useState, useEffect } from 'react'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import styled from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

import Loader from '../components/loader'
import { Mutation } from './local-resolvers'
import { cartInitialState } from './cart/reducer'
import { filtersInitialState } from './filter/reducer'

const devEndpoint = 'http://localhost:5000'
const prodEndpoint = 'https://fashion-shop-prod.herokuapp.com'

const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`

const PersistApolloProvider = ({ children }) => {
  const [client, setClient] = useState(null)

  useEffect(() => {
    const cache = new InMemoryCache()
    const _client = new ApolloClient({
      uri: process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
      clientState: {
        resolvers: { Mutation },
        defaults: {
          ...cartInitialState,
          ...filtersInitialState
        }
      },
      credentials: 'include',
      fetch: fetch,
      cache: cache
    })

    persistCache({ cache, storage: window.localStorage }).then(() => {
      setClient(_client)
    })

    return () => {}
  }, [])

  if (!client) {
    return (
      <LoaderContainer>
        <Loader color="dark" />
      </LoaderContainer>
    )
  }
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default PersistApolloProvider
