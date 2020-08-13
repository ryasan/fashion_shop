import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CartItem, {
  Details,
  Content,
  ButtonGroup,
  Price
} from './cart-item.styles'
import { formatPrice } from '../../../shared/utils'
import {
  useRemoveCartItemMutation,
  useIncreaseCartItemQuantityMutation,
  useDecreaseCartItemQuantityMutation
} from '../../../graphql/cart/hooks'

const CartItemComponent = ({ cartItem }) => {
  const { product, quantity, size } = cartItem
  const { title, price } = product
  const [removeCartItem] = useRemoveCartItemMutation()
  const [increaseCartItemQuantity] = useIncreaseCartItemQuantityMutation()
  const [decreaseCartItemQuantity] = useDecreaseCartItemQuantityMutation()
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [image] = product.largeImages

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
          <Details.Text>{title}</Details.Text>
          <Details.Text modifiers={['gray_color', 'font_size_m']}>
            {size ? `Size: ${size}` : ''}
          </Details.Text>
          <Details.Text modifiers='gray_color'>
            Quantity:{' '}
            <Details.WhiteText modifiers='white_color'>
              {quantity}
            </Details.WhiteText>
          </Details.Text>
        </Details>
        <Price>
          <Price.CloseBtn
            name='close'
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={handleRemoveCartItem}
          />
          <Price.Text modifiers='red_color'>{formatPrice(price)}</Price.Text>
          <ButtonGroup>
            <ButtonGroup.Button
              onClick={handleDecreaseQty}
              disabled={quantity === 1}
            >
              -
            </ButtonGroup.Button>
            <ButtonGroup.Button onClick={handleIncreaseQty}>
              +
            </ButtonGroup.Button>
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
