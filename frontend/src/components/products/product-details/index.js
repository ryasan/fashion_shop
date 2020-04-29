import React from 'react'

import ProductDetails from './product-details.styles'
import { H2, H4 } from '../../../elements'

const ProductDetailsComponent = ({ product }) => {
  return (
    <ProductDetails>
      <ProductDetails.Row modifiers={['flex_column']}>
        <H2>{product.title}</H2>
        <H4>{product.style}</H4>
      </ProductDetails.Row>
      <ProductDetails.Row modifiers={['flex_column']}>
        {/* row  */}
        {/* column */} {/* column */}
        {/* product image */} {/* large price  */}
        {/* product image */} {/* s sku */}
        {/* product image */} {/* m description */}
        {/* product image */} {/* s free shipping */}
      </ProductDetails.Row>
    </ProductDetails>
  )
}

export default ProductDetailsComponent
