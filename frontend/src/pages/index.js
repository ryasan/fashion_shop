import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/carousel/index'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
  </Layout>
)

export default IndexPage
