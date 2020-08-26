import { CART_QUERY } from './queries'
import {
  TOGGLE_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  MERGE_REMOTE_CART_ITEMS,
  DECREASE_CART_ITEM_QUANTITY
} from './action-types'
import { HOODIE, LONG_SLEEVE, SHIRT } from '../../types/category-types'

const itemAlreadyInCart = (cartItems, product) => {
  const findItems = cartItems.filter(
    cartItem => cartItem.product.id === product.id
  )
  const itemHasSizeProperty = [HOODIE, LONG_SLEEVE, SHIRT].includes(
    product.category
  )

  if (findItems.length && !itemHasSizeProperty) {
    return true
  } else if (findItems.length && findItems.some(f => f.size === product.size)) {
    return true
  }

  return false
}

const createNewCartItem = (cartItems, product) => {
  const newItem = {
    __typename: 'CartItem',
    size: product.size ? product.size : null,
    product: product,
    quantity: 1
  }

  return [...cartItems, newItem]
}

const removeCartItem = (cartItems, product) => {
  return cartItems.filter(item => item.product.id !== product.id)
}

const increaseCartItemQty = (cartItems, product) => {
  const newCartItems = cartItems.map(cartItem => ({
    ...cartItem,
    quantity:
      cartItem.product.id === product.id
        ? cartItem.quantity + 1
        : cartItem.quantity
  }))

  return newCartItems
}

const decreaseCartItemQty = (cartItems, product) => {
  return cartItems.map(cartItem => ({
    ...cartItem,
    quantity:
      cartItem.product.id === product.id
        ? cartItem.quantity - 1
        : cartItem.quantity
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
  const { cartItems, cartOpen } = state
  const { product, remoteCartItems } = variables || {}

  switch (actionType) {
    case TOGGLE_CART:
      return client.writeData({
        data: { cartOpen: !cartOpen }
      })

    case ADD_CART_ITEM:
      // return createNewCartItem(cartItems, product)
      return client.writeData({
        data: {
          cartOpen: true,
          cartItems: itemAlreadyInCart(cartItems, product)
            ? increaseCartItemQty(cartItems, product)
            : createNewCartItem(cartItems, product)
        }
      })

    case REMOVE_CART_ITEM:
      return client.writeData({
        data: {
          cartItems: removeCartItem(cartItems, product)
        }
      })

    case INCREASE_CART_ITEM_QUANTITY:
      return client.writeData({
        data: {
          cartItems: increaseCartItemQty(cartItems, product)
        }
      })

    case DECREASE_CART_ITEM_QUANTITY:
      return client.writeData({
        data: {
          cartItems: decreaseCartItemQty(cartItems, product)
        }
      })

    case MERGE_REMOTE_CART_ITEMS:
      return client.writeData({
        data: {
          cartItems: Object.entries(
            mergeRemoteWithLocalCartItems(cartItems, remoteCartItems)
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
