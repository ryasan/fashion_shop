import gql from 'graphql-tag'

export const LOCAL_STATE_QUERY = gql`
  query @client {
    cartOpen
  }
`

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`
