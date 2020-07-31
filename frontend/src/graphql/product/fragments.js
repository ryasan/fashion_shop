import gql from 'graphql-tag'

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on Product {
    availableSizes
    id
    description
    isFreeShipping
    isFeatured
    isAvailable
    price
    sku
    style
    title
    category
    photos
  }
`
