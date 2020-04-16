import React from 'react'

import Layout from '../components/layout/index'
import Shop from '../styles/shop-page.styles'
import SEO from '../components/seo/index'
import ProductList from '../components/products'
import ErrorBoundary from '../components/error-boundary/index'
import { useMockProducts } from '../utils'

const ShopProducts = () => {
  const { mockProducts, loading, error } = useMockProducts()

  if (loading) return <Shop.Loader color="white" />
  if (error) return <ErrorBoundary error={error} />
  return <ProductList products={mockProducts} />
}

const ShopPage = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <Shop>
        <Shop.ProductsContainer>
          <ShopProducts />
        </Shop.ProductsContainer>
      </Shop>
    </Layout>
  )
}

export default ShopPage
