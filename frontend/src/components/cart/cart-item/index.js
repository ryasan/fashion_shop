import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CartItem, {
  Details,
  Content,
  ButtonGroup,
  Price
} from './cart-item.styles'
import { formatPrice, getFrontImage } from '../../../shared/utils'
import {
  useRemoveCartItemMutation,
  useIncreaseCartItemQuantityMutation,
  useDecreaseCartItemQuantityMutation
} from '../../../graphql/cart/hooks'

const mods = {
  title: 'font-size-m',
  sizes: ['gray_color', 'font_size_s'],
  qty: 'White_color',
  price: ['font_size_m', 'red_color']
}

const CartItemComponent = ({ cartItem }) => {
  const { product, quantity } = cartItem
  const { title, price } = product
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
          <Details.Text modifiers={mods.title}>{title}</Details.Text>
          <Details.Text modifiers={mods.sizes}>{availableSizes}</Details.Text>
          <Details.Text modifiers={mods.qty}>Quantity:
            {' '}<Details.WhiteText modifiers={mods.qty}>{quantity}</Details.WhiteText>
          </Details.Text>
        </Details>
        <Price>
          <Price.CloseBtn
            name='close'
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={handleRemoveCartItem}
          />
          <Price.Text modifiers={mods.price}>{formatPrice(price)}</Price.Text>
          <ButtonGroup>
            <ButtonGroup.Button onClick={handleDecreaseQty} disabled={quantity === 1}>
              -
            </ButtonGroup.Button>
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
