import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useCreateProductMutation } from '../../graphql/product/hooks'
import mockProducts from '../../mocks/products.json'

export const withSeedProducts = <T extends {}>(
  Component: React.ComponentType<T>
) => (props: T) => {

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
            sku: uuidv4()
          }
        }
      })
    }
  }

  return <Component {...props} seedProducts={seedProducts} />
}
