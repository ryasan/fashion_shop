import React from 'react'

import ProductList from './product-list.styles'
import OneProduct from '../product'
import { ProductInterface } from '../../../shared/typings'

const ProductListComponent = ({
  products
}: {
  products: ProductInterface[]
}) => {
  if (products) {
    return (
      <ProductList>
        {products.map(p => (
          <OneProduct key={p.id} product={p} />
        ))}
      </ProductList>
    )
  }

  return null
}

export default ProductListComponent
