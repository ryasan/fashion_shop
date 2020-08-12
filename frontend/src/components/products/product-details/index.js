import React, { useState } from 'react'
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
import sizeTypes from '../../../types/size-types'
import { useAddCartItemMutation } from '../../../graphql/cart/hooks'
import { useProductQuery } from '../../../graphql/product/hooks'
import { getFrontImage, getImage, formatPrice } from '../../../shared/utils'
import { SHIRT, HOODIE, LONG_SLEEVE } from '../../../types/category-types'

const options = sizeTypes.map(size => ({ name: size, value: size }))
const [defaultOption] = options

const ProductDetailsComponent = ({ productId }) => {
  const [addCartItem] = useAddCartItemMutation()
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [selectedSize, setSelectedSize] = useState(defaultOption.value)
  const { data, loading, error } = useProductQuery({
    variables: { where: { id: productId } }
  })

  if (loading) {
    return <Loader color='white' />
  }

  const { product } = data
  const frontImage = getFrontImage(product.sku)
  const otherImages = product.photos.map(getImage)
  const images = [frontImage, ...otherImages]

  const handleAddCartItem = () => {
    addCartItem({ variables: { product: { ...product, size: selectedSize } } })
  }

  const handleSizeSelect = size => {
    setSelectedSize(size)
  }

  // prettier-ignore
  return (
    <ProductDetails>
      <ErrorBoundary error={error}>
        <SEO title={product.title} />
        <ProductDetails.Title modifiers='red_color'>{product.title}</ProductDetails.Title>
        <Content>
          <Image>
            <Image.MainImage src={images[selectedIdx]} alt={product.title} />
            <Image.ImageList>
              {images.length > 1 && images.map((image, i) => (
                <Image.Item key={i} onClick={() => setSelectedIdx(i)}>
                  <Image.TinyImage src={image} alt={product.title + i} />
                </Image.Item>
              ))}
            </Image.ImageList>
          </Image>
          <Details>
            <Details.Text modifiers='font_size_xlg'>{product.style}</Details.Text>
            <Details.Text modifiers={['font_size_xlg', 'red_color']}>{formatPrice(product.price)}</Details.Text>
            <Details.Text modifiers={['font_size_lg', 'gray_color']}>sku: {product.sku}</Details.Text>
            {product.isFreeShipping && <Details.Text modifiers='font_size_lg'>Free shipping available</Details.Text>}
            <Details.Text modifiers='font_size_lg'>description: {product.description}</Details.Text>
            <Details.AddToCartBtn onClick={handleAddCartItem}>Add to cart</Details.AddToCartBtn>
            {[SHIRT, HOODIE, LONG_SLEEVE].includes(product.category) && (
              <Select
                selected={defaultOption}
                onChange={handleSizeSelect}
                options={options}
                label='Choose size'
              />
            )}
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
