import gql from 'graphql-tag'

export const FILTERS_QUERY = gql`
  query {
    sizeFilters @client
    freeShippingSelected @client
  }
`
