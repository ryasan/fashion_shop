import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/layout/index'
import Shop from '../styles/shop-page.styles'
import SEO from '../components/seo/index'
import Products from '../components/products'
import ProductDetails from '../components/products/product-details'

const ShopProductDetails = props => {
  const product = props.location.state.product
  return (
    <Layout>
      <SEO title={`${product.title}`} />
      <Shop>
        <ProductDetails product={product}>Product Details</ProductDetails>
      </Shop>
    </Layout>
  )
}

const ShopProducts = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <Shop>
        <Products />
      </Shop>
    </Layout>
  )
}

const ShopPage = () => {
  return (
    <Router>
      <ShopProducts path="/shop" />
      <ShopProductDetails path="/shop/:id" />
    </Router>
  )
}

export default ShopPage
