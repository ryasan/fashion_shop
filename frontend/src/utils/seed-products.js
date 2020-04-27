// import React from 'react'
import { useCreateProductMutation } from '../graphql/product/hooks'

import { products as mockProducts } from '../mocks/products.json'

export const seedProducts = ({ products }) => {
  const [createProduct] = useCreateProductMutation()

  if (products.length > 1) {
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
}
