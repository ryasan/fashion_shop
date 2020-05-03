import { CART_QUERY } from './queries'
import { TOGGLE_CART, REMOVE_CART_ITEM, ADD_CART_ITEM } from './action-types'

export const cartInitialState = {
  cartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  cartOwnerId: null
}

const cartReducer = (actionType, client, variables) => {
  const state = client.readQuery({ query: CART_QUERY })
  const { cartItems: allCartItems, cartOpen, cartCount, cartTotal } = state
  const { cartItem } = variables || {}

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
          cartItems: allCartItems.filter(
            item => item.product.id !== cartItem.product.id
          )
        }
      })

    case ADD_CART_ITEM:
      const foundCartItem = allCartItems.find(
        c => c.product.id === cartItem.product.id
      )
      const cartWithNewItem = [
        ...allCartItems,
        { product: cartItem.product, quantity: 1, __typename: 'CartItem' }
      ]
      const cartWithUpdatedItem = allCartItems.map(cartItem => ({
        ...cartItem,
        quantity:
          cartItem.product.id === foundCartItem?.product.id
            ? cartItem.quantity + 1
            : cartItem.quantity
      }))

      return client.writeData({
        data: {
          cartOpen: true,
          cartCount: cartCount + 1,
          cartTotal: cartTotal + cartItem.product.price,
          cartItems: foundCartItem ? cartWithUpdatedItem : cartWithNewItem
        }
      })
  }
}

export default cartReducer
