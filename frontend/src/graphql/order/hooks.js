import { useMutation, useQuery } from '@apollo/react-hooks'

import { ORDERS_QUERY } from './queries'
import { CREATE_ORDER_MUTATION } from './mutations'
import { CURRENT_USER_QUERY } from '../user/queries'

export const useCreateOrderMutation = () => {
  return useMutation(CREATE_ORDER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}

export const useOrdersQuery = ({ variables }) => {
  return useQuery(ORDERS_QUERY, { variables, fetchPolicy: 'network-only' })
}
