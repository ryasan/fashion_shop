import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApolloClient } from '@apollo/react-hooks'
import { globalHistory, useLocation } from '@reach/router'

import Layout from './layout.styles'
import Header from '../header'
import Footer from '../footer'
import Cart from '../cart'

const LayoutComponent = ({ children }) => {
  const client = useApolloClient()
  const { pathname } = useLocation()

  useEffect(() => {
    globalHistory.listen(({ action }) => {
      if (action === 'PUSH' && pathname) {
        client.writeData({ data: { previousUrl: pathname } })
      }
    })
  }, [])

  return (
    <Layout>
      <Header />
      <Layout.Main>{children}</Layout.Main>
      <Cart />
      <Footer />
    </Layout>
  )
}

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutComponent
