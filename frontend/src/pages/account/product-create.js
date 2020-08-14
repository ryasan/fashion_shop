import React from 'react'

import ProductCreateComponent from '../../components/products/product-create'
import Layout from '../../layouts/global-layout'
import AccountLayout from '../../layouts/account-layout'
import SEO from '../../components/seo'

const ProductCreatePage = () => (
  <Layout>
    <AccountLayout>
      <SEO title='Create Product' />
      <ProductCreateComponent />
    </AccountLayout>
  </Layout>
)

export default ProductCreatePage
