import React from 'react'

import SEO from '../components/seo'
import Layout from '../layouts/global-layout'

const NotFoundPage: React.StatelessComponent = () => (
    <Layout>
        <div style={{ textAlign: 'center' }}>
            <SEO title='404: Not found' />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </Layout>
)

export default NotFoundPage
