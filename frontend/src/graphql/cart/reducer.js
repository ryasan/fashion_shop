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
  const {
    cartItems: allCartItems,
    cartOpen,
    cartCount,
    cartTotal,
    cartOwnerId
  } = state
  const { user, product, quantity } = variables || {}

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
          cartCount: cartCount - quantity,
          cartItems: allCartItems.filter(
            item => item.product.id !== product.id
          ),
          cartTotal: cartTotal - product.price * quantity
        }
      })

    case ADD_CART_ITEM:
      const foundCartItem = allCartItems.find(
        cartItem => cartItem.product.id === product.id
      )
      const cartWithNewItem = [
        ...allCartItems,
        { user, product, quantity: 1, __typename: 'CartItem' }
      ]
      const cartItemsWithUpdatedItem = allCartItems.map(cartItem => ({
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
          cartTotal: cartTotal + product.price,
          cartItems: foundCartItem ? cartItemsWithUpdatedItem : cartWithNewItem,
          cartOwnerId: cartOwnerId || (user && user.id)
        }
      })
  }
}

export default cartReducer
