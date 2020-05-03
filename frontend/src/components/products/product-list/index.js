import React from 'react'
import PropTypes from 'prop-types'

import ProductList from './product-list.styles'
import OneProduct from '../product'

const ProductListComponent = ({ products }) => {
  return (
    <ProductList>
      {products.map(p => (
        <OneProduct key={p.id} product={p} />
      ))}
    </ProductList>
  )
}

ProductListComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductListComponent
