import { useQuery, useMutation } from '@apollo/react-hooks'

import { PRODUCTS_QUERY, PRODUCTS_CONNECTION_QUERY } from './queries'
import { CREATE_PRODUCT_MUTATION, UPDATE_PRODUCT_MUTATION } from './mutations'

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

export const useUpdateProductMutation = () => {
  return useMutation(UPDATE_PRODUCT_MUTATION)
}
