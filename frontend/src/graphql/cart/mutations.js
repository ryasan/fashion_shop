import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`

export const ADD_CART_ITEM_MUTATION = gql`
  mutation($cartItem: CartItem!) {
    addCartItem(cartItem: $cartItem) @client {
      quantity
      product {
        ...ProductFragment
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const REMOVE_CART_ITEM_MUTATION = gql`
  mutation($cartItem: CartItem!) {
    removeCartItem(cartItem: $cartItem) @client {
      quantity
      product {
        ...ProductFragment
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const SYNC_USER_CART_MUTATION = gql`
  mutation($data: [SyncUserCartInput!]!) {
    syncUserCart(data: $data) {
      id
      quantity
      product {
        id
        title
      }
    }
  }
`
