import React from 'react'
import PropTypes from 'prop-types'

import Layout from './global-layout.styles'
import Header from '../components/header'
import Footer from '../components/footer'
import Toast from '../components/toast'

const LayoutComponent = ({ children }) => (
  <Layout>
    <Toast />
    <Header />
    <Layout.Main>{children}</Layout.Main>
    <Footer />
  </Layout>
)

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutComponent
