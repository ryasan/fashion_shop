import gql from 'graphql-tag'
import { PRODUCT_FRAGMENT } from './fragments'

export const PRODUCTS_QUERY = gql`
  query {
    products {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const PRODUCTS_CONNECTION_QUERY = gql`
  query($filters: ProductWhereInput) {
    productsConnection(filters: $filters) {
      edges {
        node {
          ...ProductFragment
        }
      }
      aggregate {
        count
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const FILTERS_QUERY = gql`
  query {
    sizeFilters @client
    freeShippingFilter @client
  }
`
