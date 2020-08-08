import React from 'react'

import CartFooter, { Footer } from './cart-footer.styles'
import TakeMyMoney from '../take-my-money'
import { formatPrice } from '../../../shared/utils'

const CartFooterComponent = ({ cartTotal, cartItems, cartCount }) => (
  <CartFooter>
    <Footer>
      <Footer.Text modifiers={['font_size_lg']}>SUBTOTAL</Footer.Text>
      <Footer.Text modifiers={['red_color', 'font_size_xlg']}>
        {formatPrice(cartTotal)}
      </Footer.Text>
    </Footer>
    <TakeMyMoney
      cartItems={cartItems}
      cartTotal={cartTotal}
      cartCount={cartCount}
    />
  </CartFooter>
)

export default CartFooterComponent
