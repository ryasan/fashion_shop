import { useQuery, useMutation } from '@apollo/react-hooks'

import {
  CREATE_PRODUCT_MUTATION,
  UPDATE_PRODUCT_MUTATION,
  DELETE_PRODUCT_MUTATION
} from './mutations'
import {
  PRODUCTS_QUERY,
  PRODUCTS_CONNECTION_QUERY,
  PRODUCT_QUERY
} from './queries'

export const useProductQuery = ({ variables }) => {
  return useQuery(PRODUCT_QUERY, { variables, fetchPolicy: 'network-only' })
}

export const useProductsQuery = ({ variables }) => {
  return useQuery(PRODUCTS_QUERY, { variables, fetchPolicy: 'network-only' })
}

export const useProductsConnectionQuery = filters => {
  return useQuery(PRODUCTS_CONNECTION_QUERY, {
    variables: filters
  })
}

export const useCreateProductMutation = () => {
  return useMutation(CREATE_PRODUCT_MUTATION)
}

export const useUpdateProductMutation = () => {
  return useMutation(UPDATE_PRODUCT_MUTATION)
}

export const useDeleteProductMutation = () => {
  return useMutation(DELETE_PRODUCT_MUTATION)
}
