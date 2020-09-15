import React, { useState, useEffect } from 'react'
import ApolloClient from 'apollo-client'
import fetch from 'isomorphic-fetch'
import styled from 'styled-components'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

import Loader from '../components/loader'
import { Mutation } from './local-resolvers'

const devEndpoint = 'http://localhost:5000'
const prodEndpoint = 'https://fs-backend-staging.herokuapp.com'

const LoaderContainer = styled.div`
    align-items: center;
    background: var(--dark);
    display: flex;
    height: 100vh;
    justify-content: center;
`

const PersistApolloProvider: React.FC<React.ReactChildren> = ({ children }) => {
    const [client, setClient] = useState<any>(null)

    useEffect(() => {
        const cache = new InMemoryCache()
        const _client = new ApolloClient({
            link: createHttpLink({
                fetch: fetch,
                credentials: 'include',
                uri:
                    process.env.NODE_ENV === 'development'
                        ? devEndpoint
                        : prodEndpoint
            }),
            resolvers: { Mutation },
            cache: cache
        })

        persistCache({ cache, storage: window.localStorage as any }).then(
            () => {
                setClient(_client)
            }
        )

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
