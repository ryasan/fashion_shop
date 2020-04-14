import React from 'react'

import Product from './product.styles'
import PropTypes from 'prop-types'
import { formatPrice } from '../../utils'

const ProductComponent = ({ product }) => {
  const formattedPrice = formatPrice(product.price)

  return (
    <Product>
      {product.isFreeShipping && (
        <Product.Special modifiers={['red', 'whiteText', 'smallText']}>
          Free shipping
        </Product.Special>
      )}
      <Product.Thumb>
        <Product.Img
          src={require(`../../images/products/${product.sku}_1.jpg`)}
          alt={product.title}
        />
      </Product.Thumb>
      <Product.Title>{product.title}</Product.Title>
      <Product.Divider modifiers="red" />
      <Product.Price>
        <Product.B>${formattedPrice.slice(0, -3)}</Product.B>
        <Product.Small>
          {formattedPrice.slice(formattedPrice.length - 3)}
        </Product.Small>
      </Product.Price>
      <Product.BuyBtn modifiers={['red', 'whiteText', 'redBorder']}>
        Add to cart
      </Product.BuyBtn>
    </Product>
  )
}

Product.ProductComponent = {
  product: PropTypes.object.isRequired,
  isFreeShipping: PropTypes.bool.isRequired
}

export default ProductComponent
