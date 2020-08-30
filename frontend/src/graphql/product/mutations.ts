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

export const UPDATE_PRODUCT_MUTATION = gql`
    mutation($data: ProductUpdateInput!, $where: ProductWhereUniqueInput!) {
        updateProduct(data: $data, where: $where) {
            ...ProductFragment
        }
    }
    ${PRODUCT_FRAGMENT}
`

export const DELETE_PRODUCT_MUTATION = gql`
    mutation($where: ProductWhereUniqueInput!) {
        deleteProduct(where: $where) {
            ...ProductFragment
        }
    }
    ${PRODUCT_FRAGMENT}
`
