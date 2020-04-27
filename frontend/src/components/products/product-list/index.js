import React from 'react'

import ProductList from './product-list.styles'
import OneProduct from '../product'

const ProductListComponent = ({ products }) => {
  return (
    <ProductList>
      {products.map((p) => (
        <OneProduct key={p.id} product={p} />
      ))}
    </ProductList>
  )
}

export default ProductListComponent
