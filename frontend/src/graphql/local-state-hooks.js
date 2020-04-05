import { useQuery, useMutation } from '@apollo/react-hooks'
import { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from './local-state-requests'

export const useLocalStateQuery = () => {
  return useQuery(LOCAL_STATE_QUERY)
}

export const useToggleCartMutation = () => {
  return useMutation(TOGGLE_CART_MUTATION)
}
