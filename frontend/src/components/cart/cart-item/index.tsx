import React, { useState } from 'react'

import CartItem, { Details, Price } from './cart-item.styles'
import {
    useRemoveCartItemMutation,
    useIncreaseCartItemQuantityMutation,
    useDecreaseCartItemQuantityMutation
} from '../../../graphql/cart/hooks'
import { CartItemInterface, ImagesInterface } from '../../../shared/typings'
import { formatPrice, withImages } from '../../../shared/utils'

interface CartItemComponentInterface {
    item: CartItemInterface
    images?: ImagesInterface
}

const CartItemComponent: React.FC<CartItemComponentInterface> = ({
    item,
    images
}) => {
    const { product, quantity, size } = item
    const { title, price } = product
    const [removeCartItem] = useRemoveCartItemMutation()
    const [increaseCartItemQuantity] = useIncreaseCartItemQuantityMutation()
    const [decreaseCartItemQuantity] = useDecreaseCartItemQuantityMutation()
    const [isMouseOver, setIsMouseOver] = useState(false)

    const handleRemoveCartItem = (): void => {
        removeCartItem({ variables: { product } })
    }

    const handleIncreaseQty = (): void => {
        increaseCartItemQuantity({
            variables: { product: { ...product, size } }
        })
    }

    const handleDecreaseQty = (): void => {
        decreaseCartItemQuantity({
            variables: { product: { ...product, size } }
        })
    }

    const handleMouseOver = (): void => setIsMouseOver(true)
    const handleMouseOut = (): void => setIsMouseOver(false)

    return (
        <CartItem isMouseOver={isMouseOver}>
            <CartItem.Content>
                <CartItem.Image src={images?.smallImage} />
                <Details>
                    <Details.Text>{title}</Details.Text>
                    <Details.Text modifiers={['gray_color', 'font_size_m']}>
                        {size ? `Size: ${size}` : ''}
                    </Details.Text>
                    <Details.Text modifiers='gray_color'>
                        Quantity:{' '}
                        <Details.Text modifiers='white_color'>
                            {quantity}
                        </Details.Text>
                    </Details.Text>
                </Details>
                <Price>
                    <Price.CloseBtn
                        name='close'
                        onMouseOut={handleMouseOut}
                        onMouseOver={handleMouseOver}
                        onClick={handleRemoveCartItem}
                    />
                    <Price.Text modifiers='red_color'>
                        {formatPrice(price)}
                    </Price.Text>
                    <Price.BtnGroup>
                        <Price.Btn
                            onClick={handleDecreaseQty}
                            disabled={quantity === 1}>
                            -
                        </Price.Btn>
                        <Price.Btn onClick={handleIncreaseQty}>+</Price.Btn>
                    </Price.BtnGroup>
                </Price>
            </CartItem.Content>
        </CartItem>
    )
}

export default withImages(CartItemComponent)
