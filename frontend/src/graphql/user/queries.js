import gql from 'graphql-tag'
import { USER_FRAGMENT } from './fragments'

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      username
      cart {
        quantity
        product {
          id
          description
          isFreeShipping
          isFeatured
          price
          sku
          style
          title
          availableSizes
        }
      }
    }
  }
`

export const USERS_QUERY = gql`
  query {
    users {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`
