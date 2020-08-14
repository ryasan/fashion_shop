import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ProductDetails, {
  Content,
  Details,
  Image
} from './product-details.styles'
import ProductUpdate from '../product-update'
import Loader from '../../loader'
import ErrorBoundary from '../../error-boundary'
import SEO from '../../seo'
import Select from '../../select'
import { useAddCartItemMutation } from '../../../graphql/cart/hooks'
import { useProductQuery } from '../../../graphql/product/hooks'
import { formatPrice, useImages } from '../../../shared/utils'
import { SHIRT, HOODIE, LONG_SLEEVE } from '../../../types/category-types'

const ProductDetailsComponent = ({ product }) => {
  const options = product.availableSizes.map(size => ({
    name: size,
    value: size
  }))
  const [addCartItem] = useAddCartItemMutation()
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [selectedSize, setSelectedSize] = useState(options[0])

  const { smallImages, largeImages } = useImages(product.images)

  const handleAddCartItem = () => {
    addCartItem({
      variables: {
        product: {
          ...product,
          size: selectedSize
        }
      }
    })
  }

  const handleSizeSelect = size => {
    setSelectedSize(size)
  }

  // prettier-ignore
  return (
    <ProductDetails>
      <SEO title={product.title} /> {/* eslint-disable-line */}
      <ProductDetails.Title modifiers='red_color'>{product.title}</ProductDetails.Title>
      <Content>
        <Image>
          <Image.MainImage src={largeImages[selectedIdx]} alt={product.title} />
          <Image.ImageList>
            {smallImages.map((image, i) => (
              <Image.Item key={i} onClick={() => setSelectedIdx(i)}>
                <Image.TinyImage src={image} alt={product.title + i} />
              </Image.Item>
            ))}
          </Image.ImageList>
        </Image>
        <Details>
          <Details.Text modifiers='font_size_xlg'>{product.style}</Details.Text>
          <Details.Text modifiers={['font_size_xlg', 'red_color']}>{formatPrice(product.price)}</Details.Text>
          {product.isFreeShipping && <Details.Text modifiers='font_size_lg'>Free shipping available</Details.Text>}
          <Details.Text modifiers='font_size_lg'>description: {product.description || 'none available'}</Details.Text>
          <Details.AddToCartBtn onClick={handleAddCartItem}>Add to cart</Details.AddToCartBtn>
          {[SHIRT, HOODIE, LONG_SLEEVE].includes(product.category) && (
            <Select
              selected={selectedSize}
              onChange={handleSizeSelect}
              options={options}
              label='Choose size'
            />
          )}
        </Details>
      </Content>
      <ProductUpdate product={product} />
    </ProductDetails>
  )
}

const withProductData = Component => props => {
  const { data, loading, error } = useProductQuery({
    variables: { where: { id: props.productId } }
  })

  if (loading) {
    return (
      <ProductDetails>
        <Loader color='white' />
      </ProductDetails>
    )
  }

  return (
    <ErrorBoundary error={error}>
      <Component {...props} product={data.product} />
    </ErrorBoundary>
  )
}

ProductDetailsComponent.propTypes = {
  productId: PropTypes.string.isRequired
}

export default withProductData(ProductDetailsComponent)
