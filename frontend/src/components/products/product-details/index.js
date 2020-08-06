import React from 'react'
import PropTypes from 'prop-types'

import ProductDetails, { Content, Details } from './product-details.styles'
import ProductUpdate from '../product-update'
import LoaderComponent from '../../loader'
import ErrorBoundary from '../../error-boundary'
import SEO from '../../seo'
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
        <ProductDetails.Title modifiers='red_color'>
          {product.title}
        </ProductDetails.Title>
        <Content>
          <Content.ImageContainer>
            <Content.Image src={image} alt={product.title} />
          </Content.ImageContainer>
          <Details>
            <Details.Text modifiers={['font_size_lg']}>
              {product.style}
            </Details.Text>
            <Details.Text modifiers={['font_size_lg', 'red_color']}>
              {formatPrice(product.price)}
            </Details.Text>
            <Details.Text modifiers={['font_size_s', 'gray_color']}>
              sku: {product.sku}
            </Details.Text>
            {product.isFreeShipping && (
              <Details.Text modifiers={['font_size_s']}>
                Free shipping available
              </Details.Text>
            )}
            <Details.Text modifiers={['font_size_m']}>
              description: {product.description}
            </Details.Text>
            <Details.AddToCartBtn onClick={handleAddCartItem}>
              Add to cart
            </Details.AddToCartBtn>
          </Details>
        </Content>
        <ProductUpdate product={product} />
      </ErrorBoundary>
    </ProductDetails>
  )
}

ProductDetailsComponent.propTypes = {
  productId: PropTypes.string.isRequired
}

export default ProductDetailsComponent
