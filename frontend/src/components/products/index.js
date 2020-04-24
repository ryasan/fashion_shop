import React from 'react'

import Products from './products.styles'
import ProductList from './product-list'
import ControlsHeader from './controls-header/index'

const ProductsComponent = () => {
  return (
    <Products>
      <ControlsHeader />
      <Products.Container>
        <ProductList />
      </Products.Container>
    </Products>
  )
}

export default ProductsComponent
