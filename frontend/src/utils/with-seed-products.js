import React from 'react'
import { useCreateProductMutation } from '../graphql/product/hooks'
import mockProducts from '../mocks/products.json'

export const withSeedProducts = Component => props => {
  const [createProduct] = useCreateProductMutation()

  const seedProducts = () => {
    for (const p of mockProducts) {
      createProduct({
        variables: {
          data: {
            ...p,
            ...(p.availableSizes && {
              availableSizes: { set: p.availableSizes }
            }),
            ...(p.photos && {
              photos: { set: p.photos }
            })
          }
        }
      })
    }
  }

  return <Component {...props} seedProducts={seedProducts} />
}
