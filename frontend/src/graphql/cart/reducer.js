import { CART_QUERY } from './queries'
import { TOGGLE_CART, REMOVE_CART_ITEM, ADD_CART_ITEM } from './action-types'

export const cartInitialState = {
  cartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

const cartReducer = (actionType, client, variables) => {
  const state = client.readQuery({ query: CART_QUERY })
  const { cartOpen, cartCount, cartItems, cartTotal } = state
  let product

  switch (actionType) {
    case TOGGLE_CART:
      client.writeData({
        data: {
          ...state,
          cartOpen: !cartOpen
        }
      })
      break
    case REMOVE_CART_ITEM:
      product = variables.product
      client.writeData({
        data: {
          ...state,
          cartOpen: true,
          cartCount: cartCount - 1,
          cartItems: cartItems.filter(p => p.id !== product.id),
          cartTotal: cartTotal - product.price * product.quantity
        }
      })
      break
    case ADD_CART_ITEM:
      product = variables.product
      const foundProduct = cartItems.find(p => p.id === product.id)
      client.writeData({
        data: {
          cartOpen: true,
          cartCount: cartCount + 1,
          cartTotal: cartTotal + product.price,
          cartItems: foundProduct
            ? cartItems.map(p => ({
                ...p,
                quantity: p.id === foundProduct.id ? p.quantity + 1 : p.quantity
              }))
            : [...cartItems, { ...product, __typename: 'Product' }]
        }
      })
      break
  }
}

export default cartReducer