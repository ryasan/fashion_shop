import React from 'react'

import ProductList from './product-list.styles'
import OneProduct from '../product'
import { ProductInterface } from '../../../shared/typings'

const ProductListComponent = ({
  products
}: {
  products: ProductInterface[]
}) => {
  return (
    <ProductList>
      {products.map((p: ProductInterface) => (
        <OneProduct key={p.id} item={p} />
      ))}
    </ProductList>
  )
}

export default ProductListComponent
