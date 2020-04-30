import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`

export const ADD_CART_ITEM_MUTATION = gql`
  mutation($product: Product!, $userId: ID!) {
    addCartItem(product: $product, userId: $userId) @client {
      product {
        ...Product
        quantity
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const REMOVE_CART_ITEM_MUTATION = gql`
  mutation($product: Product!) {
    removeCartItem(product: $product) @client {
      ...Product
      quantity
    }
  }
  ${PRODUCT_FRAGMENT}
`
