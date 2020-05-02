import React, { useEffect, useRef } from 'react'

import Cart from './cart.styles'
import CartItem from './cart-item'
import Icon from '../icons'
import { useCartQuery, useToggleCartMutation } from '../../graphql/cart/hooks'
import { H4 } from '../../elements'
import CartFooter from './cart-footer/index'

const CartComponent = () => {
  const [toggleCart] = useToggleCartMutation()
  const cartRef = useRef(null)
  const {
    data: { cartItems, cartOpen, cartTotal, cartCount }
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
      <Cart.Button cartOpen={cartOpen} onClick={toggleCart}>
        <Icon name={cartOpen ? 'close' : 'cart'} />
        {!cartOpen && <Cart.BagClose>{cartCount}</Cart.BagClose>}
      </Cart.Button>
      <Cart.Content>
        <Cart.Header>
          <H4>Cart</H4>
          <Cart.BagContainer>
            <Icon name="cart" />
            <Cart.BagOpen>{cartCount}</Cart.BagOpen>
          </Cart.BagContainer>
        </Cart.Header>
        {!cartItems.length && (
          <Cart.EmptyDisplay>Cart is empty</Cart.EmptyDisplay>
        )}
        <Cart.List>
          {cartItems.map((item, i) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </Cart.List>
        <CartFooter cartTotal={cartTotal} cartItems={cartItems} />
      </Cart.Content>
    </Cart>
  )
}

export default CartComponent
