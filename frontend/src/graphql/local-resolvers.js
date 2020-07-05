import {
  TOGGLE_CART,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  DECREASE_CART_ITEM_QUANTITY,
  MERGE_REMOTE_CART_ITEMS
} from './cart/action-types'
import {
  ADD_SIZE_FILTER,
  REMOVE_SIZE_FILTER,
  SET_FREE_SHIPPING_SELECTED
} from './filters/action-types'
import cartReducer from './cart/reducer'
import filtersReducer from './filters/reducer'

// local data
export const Mutation = {
  toggleCart: (_, variables, { client }) =>
    cartReducer(TOGGLE_CART, client, variables),
  increaseCartItemQuantity: (_, variables, { client }) =>
    cartReducer(INCREASE_CART_ITEM_QUANTITY, client, variables),
  decreaseCartItemQuantity: (_, variables, { client }) =>
    cartReducer(DECREASE_CART_ITEM_QUANTITY, client, variables),
  mergeRemoteCartItems: (_, variables, { client }) =>
    cartReducer(MERGE_REMOTE_CART_ITEMS, client, variables),
  removeCartItem: (_, variables, { client }) =>
    cartReducer(REMOVE_CART_ITEM, client, variables),
  addSizeFilter: (_, variables, { client }) =>
    filtersReducer(ADD_SIZE_FILTER, client, variables),
  removeSizeFilter: (_, variables, { client }) =>
    filtersReducer(REMOVE_SIZE_FILTER, client, variables),
  setFreeShippingSelected: (_, variables, { client }) =>
    filtersReducer(SET_FREE_SHIPPING_SELECTED, client, variables)
}
