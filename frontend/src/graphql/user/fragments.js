import gql from 'graphql-tag'

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    username
    email
  }
`
