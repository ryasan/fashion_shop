import React from 'react'
import { Router } from '@reach/router'

import Shop from '../styles/shop-page.styles'
import SEO from '../components/seo/index'
import Products from '../components/products'
import ProductDetails from '../components/products/product-details'

const ShopProductDetails = props => {
  const product = props.location.state.product
  return (
    <>
      <SEO title={`${product.title}`} />
      <Shop>
        <ProductDetails product={product}>Product Details</ProductDetails>
      </Shop>
    </>
  )
}

const ShopProducts = () => {
  return (
    <>
      <SEO title="Shop" />
      <Shop>
        <Products />
      </Shop>
    </>
  )
}

const ShopPage = () => {
  return (
    <Router style={{ flexGrow: 1, display: 'flex' }}>
      <ShopProducts path="/shop" />
      <ShopProductDetails path="/shop/:id" />
    </Router>
  )
}

export default ShopPage
