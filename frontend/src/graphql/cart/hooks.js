import { useQuery, useMutation } from '@apollo/react-hooks'

import { CART_QUERY } from './queries'
import {
  TOGGLE_CART_MUTATION,
  ADD_CART_ITEM_MUTATION,
  REMOVE_CART_ITEM_MUTATION
} from './mutations'
import {
  ADD_SIZE_FILTER_MUTATION,
  REMOVE_SIZE_FILTER_MUTATION
} from '../product/mutation'

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

export const useAddSizeFilterMutation = () => {
  return useMutation(ADD_SIZE_FILTER_MUTATION)
}

export const useRemoveSizeFilterMutation = () => {
  return useMutation(REMOVE_SIZE_FILTER_MUTATION)
}
