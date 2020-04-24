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
  query {
    productsConnection {
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
`
