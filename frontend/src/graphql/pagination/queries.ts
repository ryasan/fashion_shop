import gql from 'graphql-tag'

export const PAGINATION_QUERY = gql`
    query @client {
        productsPage
        ordersPage
    }
`
