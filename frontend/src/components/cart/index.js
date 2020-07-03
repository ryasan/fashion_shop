import React, { useEffect, useRef, useState } from 'react'

import Cart from './cart.styles'
import CartItem from './cart-item'
import Icon from '../icons'
import CartFooter from './cart-footer/index'
import { H4 } from '../../elements'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import {
  useCartQuery,
  useToggleCartMutation,
  useAddCartItemMutation
} from '../../graphql/cart/hooks'

const CartComponent = () => {
  const cartRef = useRef(null)
  const [cart, setCart] = useState()
  const [toggleCart] = useToggleCartMutation()
  const [addCartItem] = useAddCartItemMutation()
  const { data: userInfo } = useCurrentUserQuery()
  const { data: cartInfo } = useCartQuery()
  const { cartOpen, cartCount, cartItems, cartTotal } = cartInfo
  const remoteCart = userInfo?.me?.cart

  useEffect(() => {
    console.log('HELLO')
    // console.log(userInfo.me)
    // console.log('remoteCart', remoteCart)
    // if (userInfo) {
    //   console.log(userInfo)
    //   // console.log('triggered')
    //   // remoteCart.forEach(c =>
    //   //   addCartItem({
    //   //     variables: { cartItem: { product: c.product } }
    //   //   })
    //   // )
    // }
  }, [])

  const _toggleCart = e => {
    if (
      !cartRef.current.contains(e.target) &&
      !e.target.classList.contains('buy-btn') &&
      !e.target.classList.contains('del-btn') &&
      !e.target.parentElement.classList.contains('del-btn')
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
          {cartItems.map(item => (
            <CartItem key={item.product.id} cartItem={item} />
          ))}
        </Cart.List>
        <CartFooter cartTotal={cartTotal} cartItems={cartItems} />
      </Cart.Content>
    </Cart>
  )
}

export default CartComponent
