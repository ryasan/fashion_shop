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
import { SizeEnum, CategoryEnum } from '../../shared/interfaces/enums'

interface ProductVariablesInterface {
  variables: { where: { sku: string } }
}

interface ProductsVariablesInterface {
  variables: { where: { sku_in?: string[]; isFeatured: boolean } }
}

interface FiltersInterface {
  sizeFilters: SizeEnum[]
  categoryFilters: CategoryEnum[]
  freeShippingSelected: boolean
  orderBy: string | null
  skip: number
  first: number
}

export const useProductQuery = ({ variables }: ProductVariablesInterface) => {
  return useQuery(PRODUCT_QUERY, { variables, fetchPolicy: 'network-only' })
}

export const useProductsQuery = ({ variables }: ProductsVariablesInterface) => {
  return useQuery(PRODUCTS_QUERY, { variables, fetchPolicy: 'network-only' })
}

export const useProductsConnectionQuery = (filters: FiltersInterface) => {
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

export const useDeleteProductMutation = () => {
  return useMutation(DELETE_PRODUCT_MUTATION)
}
