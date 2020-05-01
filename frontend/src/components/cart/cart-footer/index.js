import React from 'react'

import CartFooter from './cart-footer.styles'
import { Span, Button } from '../../../elements'
import { formatPrice } from '../../../utils'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { toast } from '../../toast'

const CartFooterComponent = ({ cartTotal }) => {
  const { data } = useCurrentUserQuery()
  const me = data && data.me

  const handleCheckout = () => {
    if (!me) {
      toast('You must be signed in to checkout')
    }
  }

  return (
    <CartFooter>
      <CartFooter.SubTotal>
        <Span modifiers={['font_size_m']}>SUBTOTAL</Span>
        <Span modifiers={['red_color', 'font_size_lg']}>
          {formatPrice(cartTotal)}
        </Span>
      </CartFooter.SubTotal>
      <Span className="close-btn">
        <Button onClick={handleCheckout}>CHECKOUT</Button>
      </Span>
    </CartFooter>
  )
}

export default CartFooterComponent
