import {
  TOGGLE_CART,
  REMOVE_CART_ITEM,
  ADD_CART_ITEM
} from './cart/action-types'
import cartReducer from './cart/reducer'

// local data
export const Mutation = {
  toggleCart: (_, variables, { client }) =>
    cartReducer(TOGGLE_CART, client, variables),
  addCartItem: (_, variables, { client }) =>
    cartReducer(ADD_CART_ITEM, client, variables),
  removeCartItem: (_, variables, { client }) =>
    cartReducer(REMOVE_CART_ITEM, client, variables)
}
