import { useQuery, useMutation } from '@apollo/react-hooks'

import { CART_QUERY } from './queries'
import {
  TOGGLE_CART_MUTATION,
  INCREASE_CART_ITEM_QUANTITY_MUTATION,
  DECREASE_CART_ITEM_QUANTITY_MUTATION,
  REMOVE_CART_ITEM_MUTATION,
  CART_UPLOAD_MUTATION,
  MERGE_REMOTE_CART_ITEMS_MUTATION,
  ADD_CART_ITEM_MUTATION
} from './mutations'
import { CartItemInterface, ProductInterface } from '../../shared/typings'

export const useCartQuery = () => {
  return useQuery<{ cartItems: CartItemInterface[]; cartOpen: boolean }>(
    CART_QUERY
  )
}

export const useToggleCartMutation = () => {
  return useMutation(TOGGLE_CART_MUTATION)
}

interface CartItemPayload {
  data: any
  loading: boolean
  error: any
}

interface CartItemVariables {
  product: ProductInterface
}

export const useIncreaseCartItemQuantityMutation = () => {
  return useMutation<CartItemPayload, CartItemVariables>(
    INCREASE_CART_ITEM_QUANTITY_MUTATION
  )
}

export const useDecreaseCartItemQuantityMutation = () => {
  return useMutation(DECREASE_CART_ITEM_QUANTITY_MUTATION)
}

export const useAddCartItemMutation = () => {
  return useMutation(ADD_CART_ITEM_MUTATION)
}

export const useRemoveCartItemMutation = () => {
  return useMutation(REMOVE_CART_ITEM_MUTATION)
}

export const useUploadCartMutation = () => {
  return useMutation(CART_UPLOAD_MUTATION)
}

export const useMergeRemoteCartItemsMutation = () => {
  return useMutation(MERGE_REMOTE_CART_ITEMS_MUTATION)
}
