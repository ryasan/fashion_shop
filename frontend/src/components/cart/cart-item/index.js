import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../icons'
import CartItem from './cart-item.styles'
import { Image, Span, Button } from '../../../elements'
import { formatPrice, getFrontImage } from '../../../utils'
import {
  useRemoveCartItemMutation,
  useIncreaseCartItemQuantityMutation,
  useDecreaseCartItemQuantityMutation
} from '../../../graphql/cart/hooks'

const CartItemComponent = ({ cartItem }) => {
  const { product, quantity } = cartItem
  const [removeCartItem] = useRemoveCartItemMutation()
  const [increaseCartItemQuantity] = useIncreaseCartItemQuantityMutation()
  const [decreaseCartItemQuantity] = useDecreaseCartItemQuantityMutation()
  const [isMouseOver, setIsMouseOver] = useState(false)
  const availableSizes = product.availableSizes.join(' | ')
  const image = getFrontImage(product.sku)

  const handleRemoveCartItem = () => {
    removeCartItem({ variables: { product } })
  }

  const handleIncreaseQty = () => {
    increaseCartItemQuantity({ variables: { product } })
  }

  const handleDecreaseQty = () => {
    decreaseCartItemQuantity({ variables: { product } })
  }

  const handleMouseOver = () => {
    setIsMouseOver(true)
  }

  const handleMouseOut = () => {
    setIsMouseOver(false)
  }

  return (
    <CartItem isMouseOver={isMouseOver}>
      <CartItem.Content>
        <Image src={image} />
        <CartItem.Details>
          <Span modifiers={['font_size_m']}>{product.title}</Span>
          <Span modifiers={['gray_color', 'font_size_s']}>{`${availableSizes} | ${product.style}`}</Span>
          <Span modifiers='gray_color'>Quantity: <Span modifiers='white_color'>{quantity}</Span></Span>
        </CartItem.Details>
        <CartItem.Price>
          <Icon
            name='close'
            className='del-btn'
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={handleRemoveCartItem}
          />
          <Span modifiers={['font_size_m', 'red_color']}>{formatPrice(product.price)}</Span>
          <div>
            <Button onClick={handleDecreaseQty} disabled={quantity === 1}>-</Button>
            <Button onClick={handleIncreaseQty}>+</Button>
          </div>
        </CartItem.Price>
      </CartItem.Content>
    </CartItem>
  )
}

CartItemComponent.propTypes = {
  cartItem: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    product: PropTypes.object.isRequired
  })
}

export default CartItemComponent
