import { CART_QUERY } from './queries'
import {
  TOGGLE_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  MERGE_REMOTE_CART_ITEMS,
  DECREASE_CART_ITEM_QUANTITY
} from './action-types'

const cartItemExists = (cartItems, product) => {
  return cartItems.find(cartItem => cartItem.product.id === product.id)
}

const createNewCartItem = (cartItems, product) => {
  return [...cartItems, { product, quantity: 1, __typename: 'CartItem' }]
}

const updateCartItemQty = (cartItems, product) => {
  return cartItems.map(cartItem => ({
    ...cartItem,
    quantity: cartItem.product.id === product.id ? cartItem.quantity + 1 : cartItem.quantity
  }))
}

const mergeRemoteWithLocalCartItems = (localCartItems, remoteCartItems) => {
  return [...localCartItems, ...remoteCartItems].reduce((obj, cartItem) => {
    const productId = cartItem.product.id

    if (obj[productId]) {
      obj[productId].quantity += cartItem.quantity
    } else {
      obj[productId] = { ...cartItem, __typename: 'CartItem' }
    }

    return obj
  }, {})
}

export const cartInitialState = { cartOpen: false, cartItems: [] }

const cartReducer = (actionType, client, variables) => {
  const state = client.readQuery({ query: CART_QUERY })
  const { cartItems: localCartItems, cartOpen } = state
  const { product, remoteCartItems, productId } = variables || {}

  switch (actionType) {
    case TOGGLE_CART:
      return client.writeData({
        data: { cartOpen: !cartOpen }
      })

    case ADD_CART_ITEM:
      return client.writeData({
        data: {
          cartOpen: true,
          cartItems: cartItemExists(localCartItems, product)
            ? updateCartItemQty(localCartItems, product)
            : createNewCartItem(localCartItems, product)
        }
      })

    case REMOVE_CART_ITEM:
      return client.writeData({
        data: {
          cartItems: localCartItems.filter(
            item => item.product.id !== productId
          )
        }
      })

    case INCREASE_CART_ITEM_QUANTITY:
      return client.writeData({
        data: {
          cartItems: localCartItems.map(c => ({
            ...c,
            quantity: c.product.id === productId ? c.quantity + 1 : c.quantity
          }))
        }
      })

    case DECREASE_CART_ITEM_QUANTITY:
      return client.writeData({
        data: {
          cartItems: localCartItems.map(c => ({
            ...c,
            quantity: c.product.id === productId ? c.quantity - 1 : c.quantity
          }))
        }
      })

    case MERGE_REMOTE_CART_ITEMS:
      return client.writeData({
        data: {
          cartItems: Object.entries(
            mergeRemoteWithLocalCartItems(localCartItems, remoteCartItems)
          ).map(([, value]) => ({
            ...value
          }))
        }
      })
    default:
      return state
  }
}

export default cartReducer
