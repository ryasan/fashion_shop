import { useQuery, useMutation } from '@apollo/react-hooks'

import {
  PRODUCTS_QUERY,
  PRODUCTS_CONNECTION_QUERY,
  FILTERS_QUERY
} from './queries'
import { CREATE_PRODUCT_MUTATION } from './mutation'

export const useProductsQuery = () => {
  return useQuery(PRODUCTS_QUERY)
}

export const useProductsConnectionQuery = filters => {
  const { data, sizeFilters } = filters

  return useQuery(PRODUCTS_CONNECTION_QUERY, {
    variables: { data, sizeFilters },
    fetchPolicy: 'network-only'
  })
}

export const useCreateProductMutation = () => {
  return useMutation(CREATE_PRODUCT_MUTATION)
}

export const useFiltersQuery = () => {
  return useQuery(FILTERS_QUERY)
}
