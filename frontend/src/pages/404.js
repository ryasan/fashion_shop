import React from 'react'

import SEO from '../components/seo'
import Layout from '../layouts/global-layout'
import PageNotFound from '../styles/404.styles'

const NotFoundPage = () => (
  <Layout>
    <PageNotFound>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageNotFound>
  </Layout>
)

export default NotFoundPage
