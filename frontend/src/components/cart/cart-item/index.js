import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CartItem, { Details, Content, ButtonGroup, Price, Text } from './cart-item.styles'
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
      <Content>
        <Content.Image src={image} />
        <Details>
          <Text modifiers={['font_size_m']}>{product.title}</Text>
          <Text modifiers={['gray_color', 'font_size_s']}>{`${availableSizes} | ${product.style}`}</Text>
          <Text modifiers='gray_color'>Quantity: <Text modifiers='white_color'>{quantity}</Text></Text>
        </Details>
        <Price>
          <Price.CloseBtn
            name='close'
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={handleRemoveCartItem}
          />
          <Text modifiers={['font_size_m', 'red_color']}>{formatPrice(product.price)}</Text>
          <ButtonGroup>
            <ButtonGroup.Button onClick={handleDecreaseQty} disabled={quantity === 1}>-</ButtonGroup.Button>
            <ButtonGroup.Button onClick={handleIncreaseQty}>+</ButtonGroup.Button>
          </ButtonGroup>
        </Price>
      </Content>
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
