import gql from 'graphql-tag'

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
