import { useState, useEffect, SetStateAction } from 'react'

import _mockProducts from '../../mocks/products.json'
import { ProductInterface } from '../interfaces'

const getMockProducts = (): Promise<any> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(_mockProducts), 1000)
  })
}

export const useMockProducts = () => {
  const [products, setMockProducts] = useState<ProductInterface[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // prettier-ignore
  useEffect(() => {
    const fetchMockProducts = async () => {
      const data = <{products: ProductInterface[]}>(await getMockProducts().catch(err => setError(err)))
      setMockProducts(data.products)
      setLoading(false)
    }
    fetchMockProducts()
  }, [])

  return { data: { products }, loading, error }
}
