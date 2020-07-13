import gql from 'graphql-tag'

import { USER_FRAGMENT } from '../user/fragments'

export const ORDER_ITEM_FRAGMENT = gql`
  fragment OrderItemFragment on OrderItem {
    id
    quantity
    title
    description
    sku
    price
  }
`

export const ORDER_FRAGMENT = gql`
  fragment OrderFragment on Order {
    id
    total
    chargeId
    createdAt
    updatedAt
    orderItems {
      ...OrderItemFragment
    }
    user {
      ...UserFragment
    }
  }
  ${ORDER_ITEM_FRAGMENT}
  ${USER_FRAGMENT}
`
