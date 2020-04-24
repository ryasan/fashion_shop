import React from 'react'

import Layout from '../components/layout/index'
import Shop from '../styles/shop-page.styles'
import SEO from '../components/seo/index'
import Products from '../components/products'

const ShopPage = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <Shop>
        <Products />
      </Shop>
    </Layout>
  )
}

export default ShopPage
