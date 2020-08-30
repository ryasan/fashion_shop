import React from 'react'
import { Router } from '@reach/router'

import Shop from '../styles/shop-page.styles'
import SEO from '../components/seo/index'
import Products from '../components/products'
import ProductDetails from '../components/products/product-details'
import Layout from '../layouts/global-layout'

const ShopProductDetails: React.StatelessComponent<any> = props => {
    const [productId] = props.location.pathname.match(/\w+(?=\/?$)/)
    return (
        <Layout>
            <Shop>
                <ProductDetails productId={productId} />
            </Shop>
        </Layout>
    )
}

const ShopProducts: React.StatelessComponent<any> = () => (
    <Layout>
        <SEO title='Shop' />
        <Shop>
            <Products />
        </Shop>
    </Layout>
)

const ShopPage: React.StatelessComponent = () => (
    <Router
        style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
        }}>
        <ShopProducts path='/shop' />
        <ShopProductDetails path='/shop/:id' />
    </Router>
)

export default ShopPage
