import gql from 'graphql-tag'

import { ORDER_FRAGMENT } from './fragments'

export const ORDERS_QUERY = gql`
  query($where: OrderWhereInput, $orderBy: OrderOrderByInput) {
    orders(where: $where, orderBy: $orderBy) {
      id
      total
      chargeId
      createdAt
      updatedAt
      orderItems {
        id
        quantity
        title
        description
        sku
        price
      }
    }
  }
`

export const ORDERS_CONNECTION_QUERY = gql`
  query(
    $where: OrderWhereInput
    $orderBy: OrderOrderByInput
    $skip: Int
    $first: Int
  ) {
    ordersConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      first: $first
    ) {
      edges {
        node {
          ...OrderFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
    ordersCount: ordersConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
  ${ORDER_FRAGMENT}
`
