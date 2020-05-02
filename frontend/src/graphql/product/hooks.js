import { useQuery, useMutation } from '@apollo/react-hooks'

import {
  PRODUCTS_QUERY,
  PRODUCTS_CONNECTION_QUERY,
  FILTERS_QUERY
} from './queries'
import {
  CREATE_PRODUCT_MUTATION,
  SET_FREE_SHIPPING_SELECTED_MUTATION,
  UPDATE_PRODUCT_MUTATION,
  ADD_SIZE_FILTER_MUTATION,
  REMOVE_SIZE_FILTER_MUTATION
} from './mutation'

export const useProductsQuery = () => {
  return useQuery(PRODUCTS_QUERY)
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

export const useFiltersQuery = () => {
  return useQuery(FILTERS_QUERY)
}

export const useToggleFreeShippingMutation = () => {
  return useMutation(SET_FREE_SHIPPING_SELECTED_MUTATION)
}

export const useAddSizeFilterMutation = () => {
  return useMutation(ADD_SIZE_FILTER_MUTATION)
}

export const useRemoveSizeFilterMutation = () => {
  return useMutation(REMOVE_SIZE_FILTER_MUTATION)
}
