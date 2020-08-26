import React from 'react'
import moment from 'moment'
import { navigate } from '@reach/router'

import Order, { Header, Text } from './order.styles'
import { formatPrice, withImages } from '../../../shared/utils'
import { OrderInterface, ImagesInterface } from '../../../shared/interfaces'

const OrderComponent: React.FC<{
  order: OrderInterface
  images: ImagesInterface
}> = ({ order, images }) => {
  const { orderItems, createdAt, total, id } = order

  const goToOrderDetails = () => {
    navigate(`/account/orders/${id}/`, { state: { order: order } })
  }

  return (
    <Order onClick={goToOrderDetails}>
      <Header>
        <Header.Image src={images.smallImage} />
      </Header>
      <Order.Body>
        <Text>{orderItems.length} items</Text>
        <Text>{formatPrice(total)}</Text>
        <Text>{moment(createdAt).fromNow()}</Text>
      </Order.Body>
    </Order>
  )
}

export default withImages(OrderComponent)
