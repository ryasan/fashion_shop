import { useQuery, useMutation } from '@apollo/react-hooks'

import { CART_QUERY } from './queries'
import {
  TOGGLE_CART_MUTATION,
  ADD_CART_ITEM_MUTATION,
  REMOVE_CART_ITEM_MUTATION,
  UPSERT_CART_ITEM_MUTATION
} from './mutations'

export const useCartQuery = () => {
  return useQuery(CART_QUERY)
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

export const useUpsertCartItemMutation = () => {
  return useMutation(UPSERT_CART_ITEM_MUTATION)
}
