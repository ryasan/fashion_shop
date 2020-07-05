import React from 'react'

import ProductDetails from './product-details.styles'
import { H3, Image, Span, Button } from '../../../elements'
import { formatPrice } from '../../../utils/format-price'
import { useAddCartItemMutation } from '../../../graphql/cart/hooks'

const ProductDetailsComponent = ({ product }) => {
  const [addCartItem] = useAddCartItemMutation()
  const { image, ...p } = product

  const handleAddCartItem = () => {
    addCartItem({ variables: { product: p, quantity: 1 } })
  }

  return (
    <ProductDetails>
      <H3 modifiers="red_color">{product.title}</H3>
      <ProductDetails.Content>
        <ProductDetails.Image>
          <Image src={product.image} alt={product.title} />
        </ProductDetails.Image>
        <ProductDetails.Text>
          <Span modifiers={['font_size_lg']}>{product.style}</Span>
          <Span modifiers={['font_size_lg', 'red_color']}>
            {formatPrice(product.price)}
          </Span>
          <Span modifiers={['font_size_s', 'gray_color']}>
            sku: {product.sku}
          </Span>
          {product.isFreeShipping && (
            <Span modifiers={['font_size_s']}>{'Free shipping available'}</Span>
          )}
          <Span modifiers={['font_size_m']}>
            description: {product.description}
          </Span>
          <Button className="buy-btn" onClick={handleAddCartItem}>
            Add to cart
          </Button>
        </ProductDetails.Text>
      </ProductDetails.Content>
    </ProductDetails>
  )
}

export default ProductDetailsComponent
