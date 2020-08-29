import React from 'react'

import CartFooter from './cart-footer.styles'
import TakeMyMoney from '../take-my-money'
import { formatPrice } from '../../../shared/utils'
import { CartItemInterface } from '../../../shared/typings'

interface CartFooterComponentInterface {
  cartTotal: number
  cartItems: CartItemInterface[]
  cartCount: number
}

const CartFooterComponent: React.FC<CartFooterComponentInterface> = ({
  cartTotal,
  cartItems,
  cartCount
}) => (
  <CartFooter>
    <CartFooter.Content>
      <CartFooter.Text modifiers={['font_size_lg']}>SUBTOTAL</CartFooter.Text>
      <CartFooter.Text modifiers={['red_color', 'font_size_xlg']}>
        {formatPrice(cartTotal)}
      </CartFooter.Text>
    </CartFooter.Content>
    <TakeMyMoney
      item={cartItems[0]}
      cartItems={cartItems}
      cartTotal={cartTotal}
      cartCount={cartCount}
    />
  </CartFooter>
)

export default CartFooterComponent
