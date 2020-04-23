import { useQuery } from '@apollo/react-hooks'

import { PRODUCTS_QUERY, PRODUCTS_CONNECTION_QUERY } from './queries'

export const useProductsQuery = () => {
  return useQuery(PRODUCTS_QUERY)
}

export const useProductsConnection = () => {
  return useQuery(PRODUCTS_CONNECTION_QUERY)
}
