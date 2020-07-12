import gql from 'graphql-tag'

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
