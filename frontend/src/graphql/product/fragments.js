import gql from 'graphql-tag'

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on Product {
    availableSizes
    id
    description
    isFreeShipping
    price
    sku
    style
    title
    featured
  }
`
