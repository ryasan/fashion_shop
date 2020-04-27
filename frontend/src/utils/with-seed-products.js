import React from 'react'
import { useCreateProductMutation } from '../graphql/product/hooks'

import { products as mockProducts } from '../mocks/products.json'

export const withSeedProducts = Component => props => {
  const [createProduct] = useCreateProductMutation()

  const seedProducts = () => {
    for (const p of mockProducts) {
      createProduct({
        variables: {
          data: {
            ...p,
            availableSizes: { set: p.availableSizes }
          }
        }
      })
    }
  }

  return <Component {...props} seedProducts={seedProducts} />
}
