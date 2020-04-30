import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'

export const CART_QUERY = gql`
  query @client {
    cartItems {
      ...ProductFragment
      quantity
    }
    cartCount
    cartTotal
    cartOpen
  }
  ${PRODUCT_FRAGMENT}
`
