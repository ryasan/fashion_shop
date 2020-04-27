import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import ProductList from './product-list.styles'
import OneProduct from '../product'
import { seedProducts } from '../../../utils/seed-products'

const ProductListComponent = ({ products }) => {
  useEffect(() => {
    if (products.length < 1) {
      seedProducts({ products })
    }
  }, [])

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
