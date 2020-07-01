import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'

export const CART_LOCAL_QUERY = gql`
  query @client {
    cartItems {
      quantity
      product {
        ...ProductFragment
      }
    }
    cartCount
    cartTotal
    cartOpen
  }
  ${PRODUCT_FRAGMENT}
`

export const CART_SERVER_QUERY = gql`
  query {
    cartItems {
      quantity
      product {
        ...ProductFragment
      }
    }
  }
`
