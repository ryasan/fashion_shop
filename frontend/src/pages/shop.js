import React from 'react'

import Layout from '../components/layout/index'
import Shop from '../styles/shop-page.styles'
import SEO from '../components/seo/index'
import ProductList from '../components/products'
import ErrorBoundary from '../components/error-boundary/index'
import { useProductsQuery } from '../graphql/product/hooks'

const ShopProducts = () => {
  const { data, error, loading } = useProductsQuery()

  if (loading) return <Shop.Loader color="white" />
  return (
    <ErrorBoundary error={error}>
      <ProductList products={data.products} />
    </ErrorBoundary>
  )
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
