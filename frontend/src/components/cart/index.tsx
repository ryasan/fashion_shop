import React, { useRef } from 'react'
import { sumBy } from 'lodash'

import Cart from './cart.styles'
import CartItem from './cart-item'
import CartFooter from './cart-footer/index'
import CartCount from './cart-count'
import { useCartQuery, useToggleCartMutation } from '../../graphql/cart/hooks'

const CartComponent = () => {
  const cartRef = useRef(null)
  const [toggleCart] = useToggleCartMutation()
  const { data } = useCartQuery()

  const handleOnBlur = () => {
    if (data?.cartOpen) toggleCart()
  }

  if (data) {
    const { cartOpen, cartItems } = data
    const cartCount = sumBy(cartItems, c => c.quantity)
    const cartTotal = sumBy(cartItems, c => c.product.price * c.quantity)

    return (
      <Cart
        cartOpen={cartOpen}
        ref={cartRef}
        tabIndex='0'
        onBlur={handleOnBlur}
      >
        <Cart.Toggle_Button cartOpen={cartOpen} onClick={toggleCart}>
          <Cart.Toggle_Button_Icon name={cartOpen ? 'close' : 'cart'} />
          {!cartOpen && 'CART'}
          {!cartOpen && <CartCount>{cartCount}</CartCount>}
        </Cart.Toggle_Button>
        <Cart.Content>
          <Cart.Header>
            <Cart.Header_Title>Cart</Cart.Header_Title>
            <Cart.Bag_Container>
              <Cart.Header_Icon name='cart' />
              <CartCount>{cartCount}</CartCount>
            </Cart.Bag_Container>
            <Cart.Header_Link_To_Shop to='/shop/'>
              Continue shopping..
            </Cart.Header_Link_To_Shop>
          </Cart.Header>
          {!cartItems.length && (
            <Cart.Empty_Display>Cart is empty</Cart.Empty_Display>
          )}
          <Cart.Cart_List>
            {cartItems.map((item, i) => (
              <CartItem key={i} cartItem={item} />
            ))}
          </Cart.Cart_List>
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
