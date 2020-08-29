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
import {
  CHANGE_PRODUCTS_PAGE,
  CHANGE_ORDERS_PAGE
} from './pagination/action-types'
import { TOGGLE_OVERLAY } from './overlay/action-types'
import cartReducer from './cart/reducer'
import filtersReducer from './filter/reducer'
import overlayReducer from './overlay/reducer'
import paginationReducer from './pagination/reducer'

// prettier-ignore
export const Mutation = {
  changeOrdersPage: (_: any, variables: any, { client }: { client: any }) =>
    paginationReducer(CHANGE_ORDERS_PAGE, client, variables),
  changeProductsPage: (_: any, variables: any, { client }: { client: any }) =>
    paginationReducer(CHANGE_PRODUCTS_PAGE, client, variables),
  toggleCart: (_: any, variables: any, { client }: { client: any }) =>
    cartReducer(TOGGLE_CART, client, variables),
  toggleOverlay: (_: any, variables: any, { client }: { client: any }) =>
    overlayReducer(TOGGLE_OVERLAY, client, variables),
  increaseCartItemQuantity: (_: any, variables: any, { client }: { client: any } ) => 
    cartReducer(INCREASE_CART_ITEM_QUANTITY, client, variables),
  decreaseCartItemQuantity: (_: any, variables: any, { client }: { client: any } ) => 
    cartReducer(DECREASE_CART_ITEM_QUANTITY, client, variables),
  mergeRemoteCartItems: (_: any, variables: any, { client }: { client: any }) =>
    cartReducer(MERGE_REMOTE_CART_ITEMS, client, variables),
  addCartItem: (_: any, variables: any, { client }: { client: any }) =>
    cartReducer(ADD_CART_ITEM, client, variables),
  removeCartItem: (_: any, variables: any, { client }: { client: any }) =>
    cartReducer(REMOVE_CART_ITEM, client, variables),
  addSizeFilter: (_: any, variables: any, { client }: { client: any }) =>
    filtersReducer(ADD_SIZE_FILTER, client, variables),
  removeSizeFilter: (_: any, variables: any, { client }: { client: any }) =>
    filtersReducer(REMOVE_SIZE_FILTER, client, variables),
  addCategoryFilter: (_: any, variables: any, { client }: { client: any }) =>
    filtersReducer(ADD_CATEGORY_FILTER, client, variables),
  removeCategoryFilter: (_: any, variables: any, { client }: { client: any }) =>
    filtersReducer(REMOVE_CATEGORY_FILTER, client, variables),
  setFreeShippingSelected: (_: any, variables: any, { client }: { client: any } ) => 
    filtersReducer(SET_FREE_SHIPPING_SELECTED, client, variables)
}
