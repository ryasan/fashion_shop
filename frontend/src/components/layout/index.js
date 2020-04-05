import React from 'react'
import PropTypes from 'prop-types'

import Layout from './layout.styles'
import Header from '../header'
import Footer from '../footer'

const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Layout.Main>{children}</Layout.Main>
      <Footer />
    </Layout>
  )
}

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutComponent
