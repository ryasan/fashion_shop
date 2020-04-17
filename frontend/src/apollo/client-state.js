import { CART_QUERY } from '../graphql/local-state-queries'

// local data
export const Mutation = {
  toggleCart: (_, variables, { client }) => {
    const { cartOpen } = client.readQuery({ query: CART_QUERY })
    const data = { cartOpen: !cartOpen }

    client.writeData({ data })
  },
  addCartItem: (_, { product }, { client }) => {
    const { cartItems, cartCount, cartTotal } = client.readQuery({
      query: CART_QUERY
    })
    const foundProduct = cartItems.find(p => p.id === product.id)

    const data = {
      cartOpen: true,
      cartCount: cartCount + 1,
      cartTotal: cartTotal + product.price
    }

    if (foundProduct) {
      data.cartItems = cartItems.map(p => ({
        ...p,
        quantity: p.id === foundProduct.id ? p.quantity + 1 : p.quantity
      }))
    }
    if (!foundProduct) {
      data.cartItems = [...cartItems, { ...product, __typename: 'Product' }]
    }

    client.writeData({ data })
  },
  removeCartItem: (_, { id }, { client }) => {
    const { cartItems, cartCount, cartTotal } = client.readQuery({
      query: CART_QUERY
    })
    const product = cartItems.find(p => p.id === id)
    const data = {
      cartOpen: true,
      cartCount: cartCount - 1,
      cartItems: cartItems.filter(p => p.id !== id),
      cartTotal: cartTotal - product.price * product.quantity
    }

    client.writeData({ data })
  }
}

export const defaults = {
  cartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  currencyId: 'USD',
  currencyFormat: '$'
}
