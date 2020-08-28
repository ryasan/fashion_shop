import gql from 'graphql-tag'
import { PRODUCT_FRAGMENT } from './fragments'

export const PRODUCT_QUERY = gql`
  query($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const PRODUCTS_QUERY = gql`
  query($where: ProductWhereInput) {
    products(where: $where) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const PRODUCTS_CONNECTION_QUERY = gql`
  query(
    $freeShippingSelected: Boolean
    $sizeFilters: [Size]
    $categoryFilters: [Category]
    $orderBy: ProductOrderByInput
    $first: Int
    $skip: Int
  ) {
    productsConnection(
      freeShippingSelected: $freeShippingSelected
      sizeFilters: $sizeFilters
      categoryFilters: $categoryFilters
      orderBy: $orderBy
      first: $first
      skip: $skip
    ) {
      edges {
        node {
          ...ProductFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
    productsCount: productsConnection(
      freeShippingSelected: $freeShippingSelected
      sizeFilters: $sizeFilters
      categoryFilters: $categoryFilters
    ) {
      edges {
        node {
          ...ProductFragment
        }
      }
      aggregate {
        count
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const FILTERS_QUERY = gql`
  query {
    sizeFilters @client
    categoryFilters @client
    freeShippingSelected @client
  }
`
