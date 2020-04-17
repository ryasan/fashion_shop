import gql from 'graphql-tag'
import { PRODUCT_FRAGMENT } from './fragments'

export const TOGGLE_CART = gql`
  mutation {
    toggleCart @client
  }
`

export const ADD_CART_ITEM = gql`
  mutation addCartItemMutation($product: Product) {
    addCartItem(product: $product) @client {
      product {
        ...ProductFragment
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const REMOVE_CART_ITEM = gql`
  mutation removeCartItemMutation($product: Product!) {
    removeCartItem(product: $product) @client {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`
