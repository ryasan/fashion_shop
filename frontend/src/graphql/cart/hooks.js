import { useQuery, useMutation } from '@apollo/react-hooks'

import { CART_LOCAL_QUERY } from './queries'
import {
  TOGGLE_CART_MUTATION,
  ADD_CART_ITEM_MUTATION,
  REMOVE_CART_ITEM_MUTATION,
  SYNC_USER_CART_WITH_REMOTE_MUTATION
} from './mutations'

export const useCartQuery = () => {
  return useQuery(CART_LOCAL_QUERY)
}

export const useToggleCartMutation = () => {
  return useMutation(TOGGLE_CART_MUTATION)
}

export const useAddCartItemMutation = () => {
  return useMutation(ADD_CART_ITEM_MUTATION)
}

export const useRemoveCartItemMutation = () => {
  return useMutation(REMOVE_CART_ITEM_MUTATION)
}

export const useSyncUserCartWithRemote = () => {
  return useMutation(SYNC_USER_CART_WITH_REMOTE_MUTATION)
}
