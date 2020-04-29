import React, { useEffect, useRef } from 'react'

import Cart, { Bag, SubTotal, Header } from './cart.styles'
import CartItem from './cart-item'
import Icon from '../icons'
import { useCartQuery, useToggleCartMutation } from '../../graphql/cart/hooks'
import { formatPrice } from '../../utils'
import { Span, H4, Button } from '../elements'

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
        {!cartOpen && (
          <Bag modifiers={['red', 'small_text']} className="bag bag-closed">
            {cartCount}
          </Bag>
        )}
      </Cart.Button>
      <Cart.Content>
        <Header>
          <H4>Cart</H4>
          <Header.Bag>
            <Icon name="cart" />
            <Bag modifiers={['red', 'small_text']} className="bag bag-open">
              {cartCount}
            </Bag>
          </Header.Bag>
        </Header>
        <Cart.List>
          {!cartItems.length && (
            <Span
              modifiers={[
                'text_align_center',
                'display_block',
                'medium_text',
                'width_100'
              ]}
              className="bag bag-open">
              Add some stuff to the cart :)
            </Span>
          )}
          {cartItems.map(p => (
            <CartItem key={p.id} product={p} />
          ))}
        </Cart.List>
        <Cart.Footer>
          <SubTotal>
            <Span modifiers={['medium_text']}>SUBTOTAL</Span>
            <Span modifiers={['red_color', 'large_text']}>
              {formatPrice(cartTotal)}
            </Span>
          </SubTotal>
          <Span className="close-btn">
            <Button>CHECKOUT</Button>
          </Span>
        </Cart.Footer>
      </Cart.Content>
    </Cart>
  )
}

export default CartComponent
