import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApolloClient } from '@apollo/react-hooks'
import { globalHistory, useLocation } from '@reach/router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Layout from './layout.styles'
import Header from '../header'
import Footer from '../footer'
import Cart from '../cart'

toast.configure()

const toastOptions = {
  draggable: false,
  closeButton: true,
  hideProgressBar: true,
  className: 'toast-container',
  toastClassName: 'toast',
  autoClose: 5000
}

const LayoutComponent = ({ children }) => {
  const client = useApolloClient()
  const { pathname } = useLocation()

  useEffect(() => {
    globalHistory.listen(({ action }) => {
      if (action === 'PUSH' && pathname) {
        client.writeData({ data: { previousPage: pathname } })
      }
    })
  }, [])

  useEffect(() => {
    console.log(toast)
  }, [toast])

  return (
    <Layout>
      <ToastContainer {...toastOptions} />
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
