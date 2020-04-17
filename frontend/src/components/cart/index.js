import React, { useEffect, useRef } from 'react'

import Cart from './cart.styles'
import CartItem from './cart-item'
import {
  useCartQuery,
  useToggleCartMutation
} from '../../graphql/local-state-hooks'
import { formatPrice } from '../../utils'

const CartComponent = () => {
  const [toggleCart] = useToggleCartMutation()
  const cartRef = useRef(null)
  const {
    data: { cartItems, cartOpen, cartTotal, currencyId }
  } = useCartQuery()

  const _toggleCart = e => {
    if (
      !cartRef.current.contains(e.target) &&
      !e.target.classList.contains('buy-btn') &&
      !e.target.classList.contains('del-btn')
    ) {
      toggleCart()
    }
  }

  useEffect(() => {
    if (cartOpen) document.addEventListener('click', _toggleCart)
    return () => document.removeEventListener('click', _toggleCart)
  }, [cartOpen])

  return (
    <Cart cartOpen={cartOpen} ref={cartRef}>
      <Cart.Btn cartOpen={cartOpen} onClick={toggleCart}>
        <Cart.Icon name={cartOpen ? 'close' : 'cart'} />
      </Cart.Btn>

      <Cart.Content>
        <Cart.Header>
          <Cart.Title>Cart</Cart.Title>
          <Cart.Bag name="cart">
            <Cart.BagQty></Cart.BagQty>
          </Cart.Bag>
        </Cart.Header>

        <Cart.List>
          {cartItems.map(p => (
            <CartItem key={p.id} product={p} />
          ))}
          {!cartItems.length && (
            <Cart.P modifiers="textAlignCenter">
              Add some products to the cart 😉
            </Cart.P>
          )}
        </Cart.List>

        <Cart.Footer>
          <Cart.Sub modifiers={['mediumText']}>SUBTOTAL</Cart.Sub>
          <Cart.SubPrice>
            <Cart.P modifiers={['redColor', 'textAlignRight', 'largeText']}>
              {formatPrice(cartTotal, currencyId)}
            </Cart.P>
          </Cart.SubPrice>
          <Cart.CheckoutBtn modifiers={['darker', 'offWhiteColor']}>
            CHECKOUT
          </Cart.CheckoutBtn>
        </Cart.Footer>
      </Cart.Content>
    </Cart>
  )
}

export default CartComponent
