import { useQuery, useMutation } from '@apollo/react-hooks'

import { CART_QUERY } from './queries'
import {
  TOGGLE_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from './mutations'

export const useCartQuery = () => {
  return useQuery(CART_QUERY)
}

export const useToggleCartMutation = () => {
  return useMutation(TOGGLE_CART)
}

export const useAddCartItemMutation = () => {
  return useMutation(ADD_CART_ITEM)
}

export const useRemoveCartItemMutation = () => {
  return useMutation(REMOVE_CART_ITEM)
}
