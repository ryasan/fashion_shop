import { useQuery, useMutation } from '@apollo/react-hooks'

import { PAGINATION_QUERY } from './queries'
import {
  CHANGE_PRODUCTS_PAGE_MUTATION,
  CHANGE_ORDERS_PAGE_MUTATION
} from './mutations'

export const usePaginationQuery = () => {
  return useQuery(PAGINATION_QUERY)
}

export const useChangeProductsPageMutation = () => {
  return useMutation(CHANGE_PRODUCTS_PAGE_MUTATION)
}

export const useChangeOrdersPageMutation = () => {
  return useMutation(CHANGE_ORDERS_PAGE_MUTATION)
}
