import React from 'react'

import Product from './product'

const ProductListComponent = ({ products }) => {
  return products.map((p, i) => {
    return <Product key={i} product={p} />
  })
}

export default ProductListComponent
