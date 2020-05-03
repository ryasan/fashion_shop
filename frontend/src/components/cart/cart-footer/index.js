import React from 'react'

import CartFooter from './cart-footer.styles'
import { toast } from '../../toast'
import { Span, Button } from '../../../elements'
import { formatPrice } from '../../../utils'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { useUpsertCartItemMutation } from '../../../graphql/cart/hooks'

const CartFooterComponent = ({ cartTotal, cartItems }) => {
  const { data } = useCurrentUserQuery()
  const [ upsertCartItem, { data: upsertData, loading, error } ] = useUpsertCartItemMutation() // prettier-ignore
  const me = data && data.me

  const handleCheckout = () => {
    if (!me) {
      toast('You must be signed in to purchase')
    } else if (!cartItems.length) {
      toast('There are no items to purchase')
    } else {
      // go to stripe checkout
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
