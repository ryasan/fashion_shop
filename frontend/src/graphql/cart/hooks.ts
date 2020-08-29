import { useQuery, useMutation, MutationTuple } from '@apollo/react-hooks'

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
import { ProductInterface, CartItemInterface } from '../../shared/typings'

interface ApolloPayload {
  data: any
  loading: boolean
  error: any
}

interface CartItemVariables {
  product: ProductInterface
}

export const useCartQuery = () => {
  return useQuery<{ cartItems: CartItemInterface[]; cartOpen: boolean }>(
    CART_QUERY
  )
}

export const useToggleCartMutation = (): [() => void, object] => {
  return useMutation<ApolloPayload>(TOGGLE_CART_MUTATION)
}

export const useIncreaseCartItemQuantityMutation = (): [() => void, object] => {
  return useMutation<ApolloPayload, CartItemVariables>(
    INCREASE_CART_ITEM_QUANTITY_MUTATION
  )
}

export const useDecreaseCartItemQuantityMutation = (): [() => void, object] => {
  return useMutation<ApolloPayload>(DECREASE_CART_ITEM_QUANTITY_MUTATION)
}

export const useAddCartItemMutation = (): [() => void, object] => {
  return useMutation<ApolloPayload>(ADD_CART_ITEM_MUTATION)
}

export const useRemoveCartItemMutation = (): [() => void, object] => {
  return useMutation<ApolloPayload>(REMOVE_CART_ITEM_MUTATION)
}

export const useUploadCartMutation = (): [() => void, object] => {
  return useMutation<ApolloPayload>(CART_UPLOAD_MUTATION)
}

export const useMergeRemoteCartItemsMutation = (): [() => void, object] => {
  return useMutation<ApolloPayload>(MERGE_REMOTE_CART_ITEMS_MUTATION)
}
