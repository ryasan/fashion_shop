import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from './fragments'

export const CART_QUERY = gql`
  query @client {
    cartItems {
      ...ProductFragment
    }
    cartCount
    cartTotal
    cartOpen
  }
  ${PRODUCT_FRAGMENT}
`
