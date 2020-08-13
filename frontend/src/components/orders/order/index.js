import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { navigate } from '@reach/router'

import Order, { Header, Text } from './order.styles'
import { formatPrice } from '../../../shared/utils'

const OrderComponent = ({ order }) => {
  const { orderItems, createdAt, total } = order

  const goToOrderDetails = () => {
    navigate(`/account/orders/${order.id}/`, { state: { order } })
  }

  return (
    <Order onClick={goToOrderDetails}>
      <Header>
        <Header.Image />
      </Header>
      <Order.Body>
        <Text>{orderItems.length} items</Text>
        <Text>{formatPrice(total)}</Text>
        <Text>{moment(createdAt).fromNow()}</Text>
      </Order.Body>
    </Order>
  )
}

OrderComponent.propTypes = {
  order: PropTypes.object.isRequired
}

export default OrderComponent
