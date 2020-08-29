import { useMutation, useQuery } from '@apollo/react-hooks'

import { ORDERS_QUERY, ORDERS_CONNECTION_QUERY } from './queries'
import { CREATE_ORDER_MUTATION } from './mutations'
import { CURRENT_USER_QUERY } from '../user/queries'

interface VariablesInterface {
  variables: {
    orderBy?: string
    skip?: number
    first?: number
    where: { user: { id: string } }
  }
}

export const useCreateOrderMutation = () => {
  return useMutation(CREATE_ORDER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}

export const useOrdersQuery = ({ variables }: VariablesInterface) => {
  return useQuery(ORDERS_QUERY, { variables, fetchPolicy: 'network-only' })
}

export const useOrdersConnectionQuery = ({ variables }: VariablesInterface) => {
  return useQuery(ORDERS_CONNECTION_QUERY, {
    variables,
    fetchPolicy: 'network-only'
  })
}
