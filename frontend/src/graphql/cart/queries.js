import gql from 'graphql-tag'

import { CART_ITEM_FRAGMENT } from './fragments';

export const CART_QUERY = gql`
  query @client {
    cartItems {
      ...CartItemFragment
    }
    cartCount
    cartTotal
    cartOpen
  }
  ${CART_ITEM_FRAGMENT}
`
