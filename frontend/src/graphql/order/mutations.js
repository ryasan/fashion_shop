import gql from 'graphql-tag'

export const CREATE_ORDER_MUTATION = gql`
  mutation($token: String!) {
    createOrder(token: $token) {
      id
      chargeId
      total
      orderItems {
        id
      }
    }
  }
`
