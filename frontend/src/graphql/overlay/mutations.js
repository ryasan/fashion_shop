import gql from 'graphql-tag'

export const TOGGLE_OVERLAY_MUTATION = gql`
  mutation {
    toggleOverlay @client
  }
`
