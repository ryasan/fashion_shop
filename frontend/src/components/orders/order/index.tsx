import React from 'react'
import moment from 'moment'
import { navigate } from '@reach/router'

import Order from './order.styles'
import { formatPrice, withImages } from '../../../shared/utils'
import { ImagesInterface, OrderInterface } from '../../../shared/typings'

const OrderComponent: React.FC<{
  item: OrderInterface
  images?: ImagesInterface
}> = ({ item, images }) => {
  const { orderItems, createdAt, total, id } = item

  const goToOrderDetails = () => {
    navigate(`/account/orders/${id}/`, { state: { order: item } })
  }

  return (
    <Order onClick={goToOrderDetails}>
      <Order.Header>
        <Order.HeaderImage src={images?.smallImage} />
      </Order.Header>
      <Order.Body>
        <Order.Text>{orderItems.length} items</Order.Text>
        <Order.Text>{formatPrice(total)}</Order.Text>
        <Order.Text>{moment(createdAt).fromNow()}</Order.Text>
      </Order.Body>
    </Order>
  )
}

export default withImages(OrderComponent)
