import React from 'react'

import CartFooter from './cart-footer.styles'
import TakeMyMoney from '../take-my-money'
import { Span } from '../../../elements'
import { formatPrice } from '../../../utils'

const CartFooterComponent = ({ cartTotal, cartItems, cartCount }) => (
  <CartFooter>
    <CartFooter.SubTotal>
      <Span modifiers={['font_size_m']}>SUBTOTAL</Span>
      <Span modifiers={['red_color', 'font_size_lg']}>
        {formatPrice(cartTotal)}
      </Span>
    </CartFooter.SubTotal>
    <TakeMyMoney cartItems={cartItems} cartTotal={cartTotal} cartCount={cartCount} />
  </CartFooter>
)

export default CartFooterComponent
