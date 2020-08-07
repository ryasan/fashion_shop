import React, { useRef } from 'react'
import { sumBy } from 'lodash'

import Cart, {
  ToggleButton,
  Content,
  CartList,
  EmptyDisplay,
  Header
} from './cart.styles'
import CartItem from './cart-item'
import CartFooter from './cart-footer/index'
import CartCount from './cart-count'
import { useCartQuery, useToggleCartMutation } from '../../graphql/cart/hooks'

const CartComponent = () => {
  const cartRef = useRef(null)
  const [toggleCart] = useToggleCartMutation()
  const {
    data: { cartOpen, cartItems }
  } = useCartQuery()
  const cartCount = sumBy(cartItems, c => c.quantity)
  const cartTotal = sumBy(cartItems, c => c.product.price * c.quantity)

  const handleOnBlur = () => {
    if (cartOpen) toggleCart()
  }

  return (
    <Cart cartOpen={cartOpen} ref={cartRef} tabIndex='0' onBlur={handleOnBlur}>
      <ToggleButton cartOpen={cartOpen} onClick={toggleCart}>
        <ToggleButton.Icon name={cartOpen ? 'close' : 'cart'} />
        {!cartOpen && 'CART'}
        {!cartOpen && <CartCount>{cartCount}</CartCount>}
      </ToggleButton>
      <Content>
        <Header>
          <Header.Title>Cart</Header.Title>
          <Header.BagContainer>
            <Header.Icon name='cart' />
            <CartCount>{cartCount}</CartCount>
          </Header.BagContainer>
        </Header>
        {!cartItems.length && <EmptyDisplay>Cart is empty</EmptyDisplay>}
        <CartList>
          {cartItems.map(item => (
            <CartItem key={item.product.id} cartItem={item} />
          ))}
        </CartList>
        <CartFooter
          cartTotal={cartTotal}
          cartItems={cartItems}
          cartCount={cartCount}
        />
      </Content>
    </Cart>
  )
}

export default CartComponent
