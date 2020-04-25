import gql from 'graphql-tag'
import { CART_ITEM_FRAGMENT } from './fragments';

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`

export const ADD_CART_ITEM_MUTATION = gql`
  mutation($product: Product) {
    addCartItem(product: $product) @client {
      product {
        ...CartItemFragment
      }
    }
  }
  ${CART_ITEM_FRAGMENT}
`

export const REMOVE_CART_ITEM_MUTATION = gql`
  mutation($product: Product!) {
    removeCartItem(product: $product) @client {
      ...CartItemFragment
    }
  }
  ${CART_ITEM_FRAGMENT}
`
