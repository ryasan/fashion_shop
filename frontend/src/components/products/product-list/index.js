import React from 'react'

import ProductList from './product-list.styles'
import OneProduct from '../product'

const ProductListComponent = ({ products }) => {
  return (
    <ProductList>
      {products.map(({ node }) => {
        return <OneProduct key={node.id} product={node} />
      })}
    </ProductList>
  )
}

export default ProductListComponent
