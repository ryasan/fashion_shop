import { CART_QUERY } from './queries'
import { TOGGLE_CART, REMOVE_CART_ITEM, ADD_CART_ITEM } from './action-types'

export const cartInitialState = {
  cartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  cartOwnerId: null
}

const cartReducer = (actionType, client, variables = {}) => {
  const state = client.readQuery({ query: CART_QUERY })
  const { cartOpen, cartCount, cartItems, cartTotal } = state
  const { product, userId } = variables || {}

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
          cartCount: cartCount - product.quantity,
          cartItems: cartItems.filter(p => p.id !== product.id),
          cartTotal: cartTotal - product.price * product.quantity
        }
      })

    case ADD_CART_ITEM:
      const foundProduct = cartItems.find(p => p.id === product.id)
      const cartWithNewProduct = [...cartItems, { ...product, __typename: 'Product' }]
      const cartWithPlus1ProductQty = cartItems.map(p => ({
        ...p,
        quantity: p.id === (foundProduct || {}).id ? p.quantity + 1 : p.quantity
      }))

      return client.writeData({
        data: {
          cartOpen: true,
          cartCount: cartCount + 1,
          cartTotal: cartTotal + product.price,
          cartItems: foundProduct ? cartWithPlus1ProductQty : cartWithNewProduct,
          cartOwnerId: userId
        }
      })
  }
}

export default cartReducer
