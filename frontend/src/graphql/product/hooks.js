import { useQuery, useMutation } from '@apollo/react-hooks'

import { PRODUCTS_QUERY, PRODUCTS_CONNECTION_QUERY } from './queries'
import { CREATE_PRODUCT_MUTATION } from './mutation'

export const useProductsQuery = () => {
  return useQuery(PRODUCTS_QUERY)
}

export const useProductsConnection = () => {
  return useQuery(PRODUCTS_CONNECTION_QUERY)
}

export const useCreateProductMutation = () => {
  return useMutation(CREATE_PRODUCT_MUTATION)
}
