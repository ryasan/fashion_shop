import gql from 'graphql-tag'

import { ORDER_ITEM_FRAGMENT } from './fragments'

export const CREATE_ORDER_MUTATION = gql`
  mutation($token: String!) {
    createOrder(token: $token) {
      id
      chargeId
      total
      orderItems {
        ...OrderItemFragment
      }
    }
  }
  ${ORDER_ITEM_FRAGMENT}
`
