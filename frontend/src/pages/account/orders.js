import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '@reach/router'

import OrderListComponent from '../../components/orders/order-list'
import OrderDetailsComponent from '../../components/orders/order-details'
import AccountLayout from '../../layouts/account-layout'
import SEO from '../../components/seo'

const OrderDetails = ({ location }) => {
  const { order } = location.state
  return (
    <AccountLayout>
      <SEO title={`Order Details | ${order.id}`} />
      <OrderDetailsComponent order={order} />
    </AccountLayout>
  )
}

OrderDetails.propTypes = {
  location: PropTypes.object
}

const OrderList = ({ location }) => (
  <AccountLayout>
    <SEO title="Orders" />
    <OrderListComponent me={location?.state?.me} />
  </AccountLayout>
)

OrderList.propTypes = {
  location: PropTypes.object
}

const OrdersPage = () => (
  <Router style={{ flexGrow: 1, display: 'flex' }}>
    <OrderList path="/account/orders/" />
    <OrderDetails path="/account/orders/:id" />
  </Router>
)
export default OrdersPage
