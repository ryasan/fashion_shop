import { useQuery, useMutation } from '@apollo/react-hooks'

import {
  PRODUCTS_QUERY,
  PRODUCTS_CONNECTION_QUERY,
  FILTERS_QUERY
} from './queries'
import {
  CREATE_PRODUCT_MUTATION,
  TOGGLE_FREE_SHIPPING_FILTER_MUTATION,
  UPDATE_PRODUCT_MUTATION
} from './mutation'

export const useProductsQuery = () => {
  return useQuery(PRODUCTS_QUERY)
}

export const useProductsConnectionQuery = filters => {
  const { freeShippingFilter, sizeFilters } = filters

  return useQuery(PRODUCTS_CONNECTION_QUERY, {
    variables: {
      filters: { freeShippingFilter, sizeFilters }
    },
    fetchPolicy: 'network-only'
  })
}

export const useCreateProductMutation = () => {
  return useMutation(CREATE_PRODUCT_MUTATION)
}

export const useUpdateProductMutation = () => {
  return useMutation(UPDATE_PRODUCT_MUTATION)
}

export const useFiltersQuery = () => {
  return useQuery(FILTERS_QUERY)
}

export const useToggleFreeShippingMutation = () => {
  return useMutation(TOGGLE_FREE_SHIPPING_FILTER_MUTATION)
}
