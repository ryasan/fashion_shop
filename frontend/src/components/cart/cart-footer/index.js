import React from 'react'

import CartFooter, { Footer, Text } from './cart-footer.styles'
import TakeMyMoney from '../take-my-money'
import { formatPrice } from '../../../utils'

const CartFooterComponent = ({ cartTotal, cartItems, cartCount }) => (
  <CartFooter>
    <Footer>
      <Text modifiers={['font_size_m']}>SUBTOTAL</Text>
      <Text modifiers={['red_color', 'font_size_lg']}>
        {formatPrice(cartTotal)}
      </Text>
    </Footer>
    <TakeMyMoney
      cartItems={cartItems}
      cartTotal={cartTotal}
      cartCount={cartCount}
    />
  </CartFooter>
)

export default CartFooterComponent
