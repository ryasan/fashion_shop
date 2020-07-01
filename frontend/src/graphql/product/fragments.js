import gql from 'graphql-tag'

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on Product {
    id
    availableSizes
    description
    isFreeShipping
    isFeatured
    isAvailable
    price
    sku
    style
    title
  }
`
