import { useState, useEffect } from 'react'

import _mockProducts from '../mocks/products.json'

const getMockProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(_mockProducts), 1000)
  })
}

export const useMockProducts = () => {
  const [mockProducts, setMockProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMockProducts = async () => {
      const data = await getMockProducts().catch(err => setError(err))
      setMockProducts(data.products)
      setLoading(false)
    }
    fetchMockProducts()
  }, [])

  return { mockProducts, loading, error }
}
