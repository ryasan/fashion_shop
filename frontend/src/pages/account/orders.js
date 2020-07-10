import React from 'react'
import { Router } from '@reach/router'

import OrderListComponent from '../../components/orders/order-list'
import OrderDetailsComponent from '../../components/orders/order-details'
import AccountLayout from '../../layouts/account-layout'
import SEO from '../../components/seo'

const OrderDetails = props => {
  const { order } = props.location.state
  return (
    <AccountLayout>
      <SEO title={`Order Details | ${order.id}`} />
      <OrderDetailsComponent order={order} />
    </AccountLayout>
  )
}

const OrderList = ({ location }) => (
  <AccountLayout>
    <SEO title="Orders" />
    <OrderListComponent me={location?.state?.me} />
  </AccountLayout>
)

const OrdersPage = () => (
  <Router>
    <OrderList path="/account/orders" />
    <OrderDetails path="/account/orders/:id" />
  </Router>
)
export default OrdersPage
