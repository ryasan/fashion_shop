import React, { useState } from 'react'

import CartItem from './cart-item.styles'
import {
  useRemoveCartItemMutation,
  useIncreaseCartItemQuantityMutation,
  useDecreaseCartItemQuantityMutation
} from '../../../graphql/cart/hooks'
import { CartItemInterface, ImagesInterface } from '../../../shared/interfaces'
import { formatPrice, withImages } from '../../../shared/utils'

interface CartItemComponentInterface {
  cartItem: CartItemInterface
  images?: ImagesInterface
}

const CartItemComponent: React.FC<CartItemComponentInterface> = ({
  cartItem,
  images
}) => {
  const { product, quantity, size } = cartItem
  const { title, price } = product
  const [removeCartItem] = useRemoveCartItemMutation()
  const [increaseCartItemQuantity] = useIncreaseCartItemQuantityMutation()
  const [decreaseCartItemQuantity] = useDecreaseCartItemQuantityMutation()
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleRemoveCartItem = (): void => {
    removeCartItem({ variables: { product } })
  }

  const handleIncreaseQty = (): void => {
    increaseCartItemQuantity({ variables: { product: { ...product, size } } })
  }

  const handleDecreaseQty = (): void => {
    decreaseCartItemQuantity({ variables: { product: { ...product, size } } })
  }

  const handleMouseOver = (): void => {
    setIsMouseOver(true)
  }

  const handleMouseOut = (): void => {
    setIsMouseOver(false)
  }

  return (
    <CartItem isMouseOver={isMouseOver}>
      <CartItem.Content>
        <CartItem.Image src={images?.smallImage} />
        <CartItem.Details>
          <CartItem.DetailsText>{title}</CartItem.DetailsText>
          <CartItem.DetailsText modifiers={['gray_color', 'font_size_m']}>
            {size ? `Size: ${size}` : ''}
          </CartItem.DetailsText>
          <CartItem.DetailsText modifiers='gray_color'>
            Quantity:{' '}
            <CartItem.WhiteText modifiers='white_color'>
              {quantity}
            </CartItem.WhiteText>
          </CartItem.DetailsText>
        </CartItem.Details>
        <CartItem.Price>
          <CartItem.PriceCloseBtn
            name='close'
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={handleRemoveCartItem}
          />
          <CartItem.PriceText modifiers='red_color'>
            {formatPrice(price)}
          </CartItem.PriceText>
          <CartItem.ButtonGroup>
            <CartItem.ButtonGroupButton
              onClick={handleDecreaseQty}
              disabled={quantity === 1}
            >
              -
            </CartItem.ButtonGroupButton>
            <CartItem.ButtonGroupButton onClick={handleIncreaseQty}>
              +
            </CartItem.ButtonGroupButton>
          </CartItem.ButtonGroup>
        </CartItem.Price>
      </CartItem.Content>
    </CartItem>
  )
}

export default withImages(CartItemComponent)
