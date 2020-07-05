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
