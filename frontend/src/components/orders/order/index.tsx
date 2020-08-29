import React from 'react'
import moment from 'moment'
import { navigate } from '@reach/router'

import Order from './order.styles'
import { formatPrice } from '../../../shared/utils'
import { OrderInterface } from '../../../shared/typings'

const OrderComponent: React.FC<{
  order: OrderInterface
}> = ({ order }) => {
  const { orderItems, createdAt, total, id } = order

  const goToOrderDetails = () => {
    navigate(`/account/orders/${id}/`, { state: { order } })
  }
  // console.log(orderItems)
  return (
    <Order onClick={goToOrderDetails}>
      <Order.Header>
        <Order.HeaderImage src={orderItems?.[0]?.imageMap?.smallImage} />
      </Order.Header>
      <Order.Body>
        <Order.Text>{orderItems.length} items</Order.Text>
        <Order.Text>{formatPrice(total)}</Order.Text>
        <Order.Text>{moment(createdAt).fromNow()}</Order.Text>
      </Order.Body>
    </Order>
  )
}

export default OrderComponent
