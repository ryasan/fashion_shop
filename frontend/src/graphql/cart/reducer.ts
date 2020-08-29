import { CART_QUERY } from './queries'
import {
  TOGGLE_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  MERGE_REMOTE_CART_ITEMS,
  DECREASE_CART_ITEM_QUANTITY
} from './action-types'
import { CartItemInterface, ProductInterface } from '../../shared/typings'
import { hasSize } from '../../shared/utils/cart-tools'

interface LooseCartItemObject {
  [key: string]: { quantity: number; size?: string; __typename: string }
}

interface CartInterface {
  cartOpen: boolean
  cartItems: CartItemInterface[]
}

interface DataInterface {
  data: { cartOpen?: boolean; cartItems?: CartItemInterface[] }
}

export const cartInitialState: CartInterface = {
  cartOpen: false,
  cartItems: []
}

const cartReducer = <
  T extends { product: ProductInterface; remoteCartItems: CartItemInterface[] }
>(
  actionType: string,
  client: any,
  variables: T
) => {
  const state: CartInterface = client.readQuery({ query: CART_QUERY })

  const { cartItems, cartOpen } = state
  const { product, remoteCartItems } = variables || {}

  switch (actionType) {
    case TOGGLE_CART:
      return client.writeData(<DataInterface>{
        data: { cartOpen: !cartOpen as boolean }
      })

    case ADD_CART_ITEM:
      return client.writeData(<DataInterface>{
        data: {
          cartOpen: true,
          cartItems: [
            ...cartItems,
            {
              __typename: 'CartItem',
              size: product.size ? product.size : null,
              product: product,
              test: '',
              quantity: 1
            }
          ]
        }
      })

    case REMOVE_CART_ITEM:
      return client.writeData(<DataInterface>{
        data: {
          cartItems: cartItems.filter(
            (cartItem: CartItemInterface): boolean =>
              cartItem.product.id !== product.id
          )
        }
      })

    case INCREASE_CART_ITEM_QUANTITY:
      return client.writeData(<DataInterface>{
        data: {
          cartOpen: true,
          cartItems: cartItems.map(cartItem => {
            const { product: prev, quantity, size } = cartItem
            if (prev.id === product.id) {
              if (!hasSize({ category: product.category })) {
                return {
                  ...cartItem,
                  quantity: prev.id === product.id ? quantity + 1 : quantity,
                  product: product,
                  size: size
                }
              }

              if (size === product.size) {
                return {
                  ...cartItem,
                  quantity: quantity + 1,
                  product: product,
                  size: size
                }
              }
            }
            return cartItem
          })
        }
      })

    case DECREASE_CART_ITEM_QUANTITY:
      return client.writeData(<DataInterface>{
        data: {
          cartItems: cartItems.map(c => ({
            ...c,
            quantity: c.product.id === product.id ? c.quantity - 1 : c.quantity
          }))
        }
      })

    case MERGE_REMOTE_CART_ITEMS:
      const data = {
        cartItems: Object.entries(
          [...cartItems, ...remoteCartItems].reduce((obj, cartItem) => {
            const productId = cartItem.product.id

            if (obj[productId]) {
              obj[productId].quantity += cartItem.quantity
            } else {
              obj[productId] = { ...cartItem, __typename: 'CartItem' }
            }

            return obj
          }, {} as LooseCartItemObject)
        ).map(([, value]) => ({ ...value }))
      }

      console.log('saving to cache: ', data)
    return client.writeData({ data })

    default:
      return state
  }
}

export default cartReducer
