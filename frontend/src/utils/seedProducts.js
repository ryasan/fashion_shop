import { products } from '../mocks/products.json'
import { useCreateProductMutation } from '../graphql/product/hooks'

export const seedProducts = () => {
  const [createProduct] = useCreateProductMutation()

  products.forEach(p => {
    delete p.quantity
    delete p.id
    createProduct({
      variables: {
        data: {
          ...p,
          availableSizes: {
            set: p.availableSizes
          }
        }
      }
    })
  })

  return null
}
