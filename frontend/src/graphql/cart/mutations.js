import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`

export const ADD_CART_ITEM_MUTATION = gql`
  mutation($user: User, $product: Product) {
    addCartItem(user: $user, product: $product) @client {
      user
      quantity
      product {
        ...ProductFragment
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const REMOVE_CART_ITEM_MUTATION = gql`
  mutation($product: Product!, $quantity: Int!) {
    removeCartItem(product: $product, quantity: $quantity) @client {
      user
      quantity
      product {
        ...ProductFragment
        quantity
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const UPSERT_CART_ITEM_MUTATION = gql`
  mutation(
    $where: CartItemWhereUniqueInput!
    $create: CartItemCreateInput!
    $update: CartItemUpdateInput!
  ) {
    upsertCartItem(where: $where, create: $create, update: $update) {
      id
    }
  }
`
