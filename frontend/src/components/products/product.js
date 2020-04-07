import React from 'react'

import Product from './product.styles'

const ProductComponent = ({ product }) => {
  return (
    <Product>
      {product.isFreeShipping && (
        <Product.Deal modifiers={['dark', 'whiteText', 'smallText']}>
          Free shipping
        </Product.Deal>
      )}
      <Product.Thumb>
        <Product.Img
          src={require(`../../images/products/${product.sku}_1.jpg`)}
          alt={product.title}
        />
      </Product.Thumb>
      <Product.Title></Product.Title>
      <Product.Price></Product.Price>
      <Product.BuyBtn modifiers={['dark', 'whiteText']}>
        Add to cart
      </Product.BuyBtn>
    </Product>
  )
}

export default ProductComponent
