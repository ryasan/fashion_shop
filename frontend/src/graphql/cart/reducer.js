import { CART_QUERY } from './queries'
import {
  TOGGLE_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  MERGE_REMOTE_CART_ITEMS,
  DECREASE_CART_ITEM_QUANTITY
} from './action-types'

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
      const cartItemExists = localCartItems.find(c => c.product.id === product.id)
      const cartWithNewItem = [...localCartItems, { product, quantity: 1, __typename: 'CartItem' }]
      const cartWithUpdatedItem = localCartItems.map(c => ({
        ...c,
        quantity: c.product.id === product.id ? c.quantity + 1 : c.quantity
      }))

      return client.writeData({
        data: {
          cartItems: cartItemExists ? cartWithUpdatedItem : cartWithNewItem
        }
      })

    case REMOVE_CART_ITEM:
      return client.writeData({
        data: {
          cartItems: localCartItems.filter(item => item.product.id !== productId)
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
      const data = [...localCartItems, ...remoteCartItems].reduce((obj, c) => {
        const productId = c.product.id

        if (obj[productId]) {
          obj[productId].quantity += c.quantity
        } else {
          obj[productId] = { ...c, __typename: 'CartItem' }
        }

        return obj
      }, {})

      return client.writeData({
        data: {
          cartItems: Object.entries(data).map(([, value]) => ({
            ...value
          }))
        }
      })
      default:
        return state
  }
}

export default cartReducer
