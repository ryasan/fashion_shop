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
