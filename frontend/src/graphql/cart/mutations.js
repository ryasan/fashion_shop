import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`

export const CART_UPLOAD_MUTATION = gql`
  mutation($data: [CartUploadInput!]!) {
    uploadCart(data: $data) {
      id
    }
  }
`

export const MERGE_REMOTE_CART_ITEMS_MUTATION = gql`
  mutation($remoteCartItems: [CartItem!]!) {
    mergeRemoteCartItems(remoteCartItems: $remoteCartItems) @client {
      quantity
      product {
        ...ProductFragment
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const INCREASE_CART_ITEM_QUANTITY_MUTATION = gql`
  mutation($productId: ID!) {
    increaseCartItemQuantity(productId: $productId) @client {
      quantity
      product {
        id
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const DECREASE_CART_ITEM_QUANTITY_MUTATION = gql`
  mutation($productId: ID!) {
    decreaseCartItemQuantity(productId: $productId) @client {
      quantity
      product {
        id
      }
    }
  }
`

export const REMOVE_CART_ITEM_MUTATION = gql`
  mutation($productId: ID!) {
    removeCartItem(productId: $productId) @client {
      quantity
      product {
        id
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`
