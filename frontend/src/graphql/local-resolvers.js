import {
  TOGGLE_CART,
  REMOVE_CART_ITEM,
  ADD_CART_ITEM
} from './cart/action-types'
import { ADD_SIZE_FILTER, REMOVE_SIZE_FILTER } from './product/action-types'
import cartReducer from './cart/reducer'
import filtersReducer from './product/reducer'

// local data
export const Mutation = {
  toggleCart: (_, variables, { client }) =>
    cartReducer(TOGGLE_CART, client, variables),
  addCartItem: (_, variables, { client }) =>
    cartReducer(ADD_CART_ITEM, client, variables),
  removeCartItem: (_, variables, { client }) =>
    cartReducer(REMOVE_CART_ITEM, client, variables),
  addSizeFilter: (_, variables, { client }) =>
    filtersReducer(ADD_SIZE_FILTER, client, variables),
  removeSizeFilter: (_, variables, { client }) =>
    filtersReducer(REMOVE_SIZE_FILTER, client, variables)
}
