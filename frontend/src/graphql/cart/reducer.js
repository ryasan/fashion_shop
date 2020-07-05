import { CART_QUERY } from './queries'
import {
  TOGGLE_CART,
  REMOVE_CART_ITEM,
  ADD_CART_ITEM,
  MERGE_REMOTE_CART_ITEMS
} from './action-types'

export const cartInitialState = { cartOpen: false, cartItems: [] }

const cartReducer = (actionType, client, variables) => {
  const state = client.readQuery({ query: CART_QUERY })
  const { cartItems: localCartItems, cartOpen, cartCount, cartTotal } = state
  const { cartItem, remoteCartItems } = variables || {}

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
          cartCount: cartCount - cartItem.quantity,
          cartTotal: cartTotal - cartItem.product.price * cartItem.quantity,
          cartItems: localCartItems.filter(
            item => item.product.id !== cartItem.product.id
          )
        }
      })

    case ADD_CART_ITEM:
      const foundCartItem = localCartItems.find(
        c => c.product.id === cartItem.product.id
      )

      const cartWithNewItem = [
        ...localCartItems,
        { ...cartItem, __typename: 'CartItem' }
      ]

      const cartWithUpdatedItem = localCartItems.map(c => ({
        ...c,
        quantity:
          c.product.id === cartItem.product.id
            ? c.quantity + cartItem.quantity
            : c.quantity
      }))

      return client.writeData({
        data: {
          cartOpen: true,
          cartItems: foundCartItem ? cartWithUpdatedItem : cartWithNewItem
        }
      })

    case MERGE_REMOTE_CART_ITEMS:
      const data = [...localCartItems, ...remoteCartItems].reduce((obj, c) => {
        if (obj[c.product.id]) {
          obj[c.product.id].quantity += c.quantity
        } else {
          obj[c.product.id] = { ...c, __typename: 'CartItem' }
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
