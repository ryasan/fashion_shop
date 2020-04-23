import React from 'react'

import Product from './product'

const ProductListComponent = ({ products }) => {
  return products.map((p, i) => {
    return <Product key={p.id || i} product={p} />
  })
}

export default ProductListComponent
