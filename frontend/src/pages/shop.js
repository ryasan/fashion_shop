import React from 'react'
import { Router } from '@reach/router'

import Shop from '../styles/shop-page.styles'
import SEO from '../components/seo/index'
import Products from '../components/products'
import ProductDetails from '../components/products/product-details'
import Layout from '../layouts/global-layout'

const ShopProductDetails = props => {
  const sku = props.location.state.sku
  return (
    <Layout>
      <Shop>
        <ProductDetails sku={sku}>Product Details</ProductDetails>
      </Shop>
    </Layout>
  )
}

const ShopProducts = () => {
  return (
    <Layout>
      <SEO title='Shop' />
      <Shop>
        <Products />
      </Shop>
    </Layout>
  )
}

const ShopPage = () => {
  return (
    <Router style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <ShopProducts path='/shop' />
      <ShopProductDetails path='/shop/:id' />
    </Router>
  )
}

export default ShopPage
