import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../icons'
import CartItem, { Content } from './cart-item.styles'
import { useRemoveCartItemMutation } from '../../../graphql/cart/hooks'
import { formatPrice } from '../../../utils'
import { Image, Span } from '../../elements'

const CartItemComponent = ({ product }) => {
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
    removeCartItem({ variables: { product } })
  }

  return (
    <CartItem isMouseOver={isMouseOver}>
      <Content>
        <Image src={require(`../../../images/products/${product.sku}_2.jpg`)} />
        <Content.Details>
          <Span modifiers="mediumText">{product.title}</Span>
          <Span modifiers={['grayColor', 'smallText']}>
            {`${availableSizes} | ${product.style}`}
            <br/>
            Quantity: <Span modifiers="offWhiteColor">{product.quantity}</Span>
          </Span>
        </Content.Details>
        <CartItem.Price>
          <Icon
            name="close"
            className="del-btn"
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={handleRemoveCartItem}
          />
          <Span modifiers={['mediumText', 'redColor']}>
            {formatPrice(product.price)}
          </Span>
        </CartItem.Price>
      </Content>
    </CartItem>
  )
}

CartItemComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartItemComponent
