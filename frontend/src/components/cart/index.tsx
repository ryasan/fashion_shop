import React, { useRef, RefObject } from 'react'
import { sumBy } from 'lodash'

import Cart from './cart.styles'
import CartItem from './cart-item'
import CartFooter from './cart-footer/index'
import CartCount from './cart-count'
import { useCartQuery, useToggleCartMutation } from '../../graphql/cart/hooks'

const CartComponent = () => {
  const cartRef = useRef<HTMLDivElement>()
  const [toggleCart] = useToggleCartMutation()
  const { data } = useCartQuery()

  const handleOnBlur = (e: any) => {
    if (data?.cartOpen && !cartRef.current?.contains(e.relatedTarget)) {
      toggleCart()
    }
  }

  if (data) {
    const { cartOpen, cartItems } = data
    const cartCount = sumBy(cartItems, c => c.quantity)
    const cartTotal = sumBy(cartItems, c => c.product.price * c.quantity)

    return (
      <Cart
        cartOpen={cartOpen}
        ref={cartRef}
        tabIndex='-1'
        onBlur={handleOnBlur}
      >
        <Cart.ToggleButton cartOpen={cartOpen} onClick={toggleCart}>
          <Cart.ToggleButtonIcon name={cartOpen ? 'close' : 'cart'} />
          {!cartOpen && 'CART'}
          {!cartOpen && <CartCount>{cartCount}</CartCount>}
        </Cart.ToggleButton>
        <Cart.Content>
          <Cart.Header>
            <Cart.HeaderTitle>Cart</Cart.HeaderTitle>
            <Cart.BagContainer>
              <Cart.HeaderIcon name='cart' />
              <CartCount>{cartCount}</CartCount>
            </Cart.BagContainer>
            <Cart.HeaderLinkToShop to='/shop/'>
              Continue shopping..
            </Cart.HeaderLinkToShop>
          </Cart.Header>
          {!cartItems.length && (
            <Cart.EmptyDisplay>Cart is empty</Cart.EmptyDisplay>
          )}
          <Cart.CartList>
            {cartItems.map((item, i) => (
              <CartItem key={i} cartItem={item} />
            ))}
          </Cart.CartList>
          <CartFooter
            cartTotal={cartTotal}
            cartItems={cartItems}
            cartCount={cartCount}
          />
        </Cart.Content>
      </Cart>
    )
  }

  return null
}

export default CartComponent
