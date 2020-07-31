import { useQuery, useMutation } from '@apollo/react-hooks'

import { CREATE_PRODUCT_MUTATION, UPDATE_PRODUCT_MUTATION } from './mutations'
import {
  PRODUCTS_QUERY,
  PRODUCTS_CONNECTION_QUERY,
  PRODUCT_QUERY
} from './queries'

export const useProductQuery = ({ variables }) => {
  return useQuery(PRODUCT_QUERY, { variables })
}

export const useProductsQuery = ({ variables }) => {
  return useQuery(PRODUCTS_QUERY, { variables })
}

export const useProductsConnectionQuery = filters => {
  return useQuery(PRODUCTS_CONNECTION_QUERY, {
    variables: filters,
    fetchPolicy: 'network-only'
  })
}

export const useCreateProductMutation = () => {
  return useMutation(CREATE_PRODUCT_MUTATION)
}

export const useUpdateProductMutation = variables => {
  return useMutation(UPDATE_PRODUCT_MUTATION)
}
