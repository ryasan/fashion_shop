import gql from 'graphql-tag'

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on Product {
    availableSizes
    id
    description
    isFreeShipping
    isFeatured
    availableSizes
    price
    sku
    style
    title
  }
`
