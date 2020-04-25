import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from './fragments'

export const CREATE_PRODUCT_MUTATION = gql`
  mutation($data: ProductCreateInput) {
    createProduct(data: $data) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const ADD_SIZE_FILTER_MUTATION = gql`
  mutation($size: String!) {
    addSizeFilter(size: $size) @client {
      sizeFilters
    }
  }
`

export const REMOVE_SIZE_FILTER_MUTATION = gql`
  mutation($size: String!) {
    removeSizeFilter(size: $size) @client {
      sizeFilters
    }
  }
`
