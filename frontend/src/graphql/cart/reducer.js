import { CART_QUERY } from './queries'
import {
  TOGGLE_CART,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  MERGE_REMOTE_CART_ITEMS,
  DECREASE_CART_ITEM_QUANTITY
} from './action-types'

export const cartInitialState = { cartOpen: false, cartItems: [] }

const cartReducer = (actionType, client, variables) => {
  const state = client.readQuery({ query: CART_QUERY })
  const { cartItems: localCartItems, cartOpen } = state
  const { cartItem, remoteCartItems, productId } = variables || {}

  switch (actionType) {
    case TOGGLE_CART:
      return client.writeData({
        data: {
          ...state,
          cartOpen: !cartOpen
        }
      })

    case REMOVE_CART_ITEM:
      return client.writeData({
        data: {
          ...state,
          cartOpen: true,
          cartItems: localCartItems.filter(item => item.product.id !== productId)
        }
      })

    case INCREASE_CART_ITEM_QUANTITY:
      const cartItemExists = localCartItems.find(c => c.product.id === productId)

      const cartWithNewItem = [...localCartItems, { ...cartItem, __typename: 'CartItem' }]

      const cartWithUpdatedItem = localCartItems.map(c => ({
        ...c,
        quantity: c.product.id === productId ? c.quantity + 1 : c.quantity
      }))

      return client.writeData({
        data: {
          cartOpen: true,
          cartItems: cartItemExists ? cartWithUpdatedItem : cartWithNewItem
        }
      })

    case DECREASE_CART_ITEM_QUANTITY:
      return client.writeData({
        data: {
          ...state,
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

      const cartItems = Object.entries(data).map(([, value]) => ({
        ...value
      }))

      return client.writeData({ data: { cartItems } })
  }
}

export default cartReducer
