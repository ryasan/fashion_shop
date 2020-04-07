import React from 'react'

import Product from './product'

const ProductListComponent = ({ products }) => {
  return products.map(p => {
    return <Product key={p.id} product={p} />
  })
}

export default ProductListComponent
