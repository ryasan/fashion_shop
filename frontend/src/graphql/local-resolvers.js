import {
  TOGGLE_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  DECREASE_CART_ITEM_QUANTITY,
  MERGE_REMOTE_CART_ITEMS
} from './cart/action-types'
import {
  ADD_SIZE_FILTER,
  REMOVE_SIZE_FILTER,
  SET_FREE_SHIPPING_SELECTED,
  ADD_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER
} from './filter/action-types'
import { TOGGLE_OVERLAY } from './overlay/action-types'
import cartReducer from './cart/reducer'
import filtersReducer from './filter/reducer'
import overlayReducer from './overlay/reducer'

// local data
export const Mutation = {
  toggleCart: (_, variables, { client }) =>
    cartReducer(TOGGLE_CART, client, variables),
  toggleOverlay: (_, variables, { client }) =>
    overlayReducer(TOGGLE_OVERLAY, client, variables),
  increaseCartItemQuantity: (_, variables, { client }) =>
    cartReducer(INCREASE_CART_ITEM_QUANTITY, client, variables),
  decreaseCartItemQuantity: (_, variables, { client }) =>
    cartReducer(DECREASE_CART_ITEM_QUANTITY, client, variables),
  mergeRemoteCartItems: (_, variables, { client }) =>
    cartReducer(MERGE_REMOTE_CART_ITEMS, client, variables),
  addCartItem: (_, variables, { client }) =>
    cartReducer(ADD_CART_ITEM, client, variables),
  removeCartItem: (_, variables, { client }) =>
    cartReducer(REMOVE_CART_ITEM, client, variables),
  addSizeFilter: (_, variables, { client }) =>
    filtersReducer(ADD_SIZE_FILTER, client, variables),
  removeSizeFilter: (_, variables, { client }) =>
    filtersReducer(REMOVE_SIZE_FILTER, client, variables),
  addCategoryFilter: (_, variables, { client }) =>
    filtersReducer(ADD_CATEGORY_FILTER, client, variables),
  removeCategoryFilter: (_, variables, { client }) =>
    filtersReducer(REMOVE_CATEGORY_FILTER, client, variables),
  setFreeShippingSelected: (_, variables, { client }) =>
    filtersReducer(SET_FREE_SHIPPING_SELECTED, client, variables)
}
