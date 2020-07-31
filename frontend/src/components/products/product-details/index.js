import React from 'react'
import PropTypes from 'prop-types'

import ProductDetails from './product-details.styles'
import ProductUpdate from '../product-update'
import LoaderComponent from '../../loader'
import ErrorBoundary from '../../error-boundary'
import SEO from '../../seo'
import { H3, Image, Span, Button } from '../../../elements'
import { useAddCartItemMutation } from '../../../graphql/cart/hooks'
import { useProductQuery } from '../../../graphql/product/hooks'
import { formatPrice } from '../../../utils/format-price'
import { getFrontImage } from '../../../utils'

const ProductDetailsComponent = ({ productId }) => {
  const [addCartItem] = useAddCartItemMutation()
  const { data, loading, error } = useProductQuery({
    variables: { where: { id: productId } }
  })

  if (loading) {
    return <LoaderComponent color='white' />
  }

  const { product } = data
  const image = getFrontImage(product.sku)
  const handleAddCartItem = () => {
    addCartItem({ variables: { product } })
  }

  return (
    <ProductDetails>
      <ErrorBoundary error={error}>
        <SEO title={product.title} />
        <H3 modifiers='red_color'>{product.title}</H3>
        <ProductDetails.Content>
          <ProductDetails.Image>
            <Image src={image} alt={product.title} />
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
              <Span modifiers={['font_size_s']}>Free shipping available</Span>
            )}
            <Span modifiers={['font_size_m']}>
              description: {product.description}
            </Span>
            <Button className='buy-btn' onClick={handleAddCartItem}>
              Add to cart
            </Button>
          </ProductDetails.Text>
        </ProductDetails.Content>
        <ProductUpdate product={product} />
      </ErrorBoundary>
    </ProductDetails>
  )
}

ProductDetailsComponent.propTypes = {
  productId: PropTypes.string.isRequired
}

export default ProductDetailsComponent
