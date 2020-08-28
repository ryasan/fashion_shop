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
import { overlayInitialState } from './overlay/reducer'
import { paginationInitialState } from './pagination/reducer'

const devEndpoint = 'http://localhost:5000'
const prodEndpoint = 'https://fs-backend-staging.herokuapp.com'

const LoaderContainer = styled.div`
  align-items: center;
  background: var(--dark);
  display: flex;
  height: 100vh;
  justify-content: center;
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
          ...filtersInitialState,
          ...overlayInitialState,
          ...paginationInitialState
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
        <Loader color='white' />
      </LoaderContainer>
    )
  }
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default PersistApolloProvider
