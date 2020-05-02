import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../icons'
import CartItem from './cart-item.styles'
import { useRemoveCartItemMutation } from '../../../graphql/cart/hooks'
import { formatPrice } from '../../../utils'
import { Image, Span } from '../../../elements'

const CartItemComponent = ({ product, quantity, cartOwnerId }) => {
  const [removeCartItem] = useRemoveCartItemMutation()
  const [isMouseOver, setIsMouseOver] = useState(false)
  const availableSizes = product.availableSizes.join(' | ')

  const handleMouseOver = () => {
    setIsMouseOver(true)
  }

  const handleMouseOut = () => {
    setIsMouseOver(false)
  }

  const handleRemoveCartItem = () => {
    removeCartItem({ variables: { product, quantity } })
  }

  return (
    <CartItem isMouseOver={isMouseOver}>
      <CartItem.Content>
        <Image src={require(`../../../images/products/${product.sku}_2.jpg`)} />
        <CartItem.Details>
          <Span modifiers="font_size_m">{product.title}</Span>
          <Span modifiers={['gray_color', 'font_size_s']}>
            {`${availableSizes} | ${product.style}`}
            <br/>
            Quantity: <Span modifiers="off_white_color">{quantity}</Span>
          </Span>
        </CartItem.Details>
        <CartItem.Price>
          <Icon
            name="close"
            className="del-btn"
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={handleRemoveCartItem}
          />
          <Span modifiers={['font_size_m', 'red_color']}>
            {formatPrice(product.price)}
          </Span>
        </CartItem.Price>
      </CartItem.Content>
    </CartItem>
  )
}

CartItemComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartItemComponent
