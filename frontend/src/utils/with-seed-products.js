import React from 'react'
import { useCreateProductMutation } from '../graphql/product/hooks'
import { shuffle } from 'lodash'
import mockProducts from '../mocks/products.json'

const products = shuffle(mockProducts)
export const withSeedProducts = Component => props => {
  const [createProduct] = useCreateProductMutation()

  const seedProducts = () => {
    for (const p of products) {
      createProduct({
        variables: {
          data: {
            ...p,
            ...(p.availableSizes && {
              availableSizes: { set: [] }
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
