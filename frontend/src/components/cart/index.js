import React, { useRef } from 'react'
import { sumBy } from 'lodash'

import Cart from './cart.styles'
import CartItem from './cart-item'
import Icon from '../icons'
import CartFooter from './cart-footer/index'
import CartCount from './cart-count'
import { H4 } from '../../elements'
import { useCartQuery, useToggleCartMutation } from '../../graphql/cart/hooks'

const CartComponent = () => {
  const cartRef = useRef(null)
  const [toggleCart] = useToggleCartMutation()
  const { data: { cartOpen, cartItems } } = useCartQuery()
  const cartCount = sumBy(cartItems, c => c.quantity)
  const cartTotal = sumBy(cartItems, c => c.product.price * c.quantity)

  const handleOnBlur = () => {
    if (cartOpen) toggleCart()
  }

  return (
    <Cart cartOpen={cartOpen} ref={cartRef} tabIndex='0' onBlur={handleOnBlur}>
      <Cart.ToggleButton cartOpen={cartOpen} onClick={toggleCart}>
        <Icon name={cartOpen ? 'close' : 'cart'} />
        {!cartOpen && 'CART'}
        {!cartOpen && <CartCount>{cartCount}</CartCount>}
      </Cart.ToggleButton>
      <Cart.Content>
        <Cart.Header>
          <H4>Cart</H4>
          <Cart.BagContainer>
            <Icon name='cart' />
            <CartCount>{cartCount}</CartCount>
          </Cart.BagContainer>
        </Cart.Header>
        {!cartItems.length && (
          <Cart.EmptyDisplay>Cart is empty</Cart.EmptyDisplay>
        )}
        <Cart.List>
          {cartItems.map(item => (
            <CartItem key={item.product.id} cartItem={item} />
          ))}
        </Cart.List>
        <CartFooter
          cartTotal={cartTotal}
          cartItems={cartItems}
          cartCount={cartCount}
        />
      </Cart.Content>
    </Cart>
  )
}

export default CartComponent
