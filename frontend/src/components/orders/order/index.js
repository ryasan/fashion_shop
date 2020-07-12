import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { navigate } from '@reach/router'

import Order from './order.styles'
import { getSmallImg } from '../../../utils/get-image'
import { Image, P } from '../../../elements'
import { formatPrice } from '../../../utils'

const OrderComponent = ({ order }) => {
  const { orderItems, createdAt, total } = order
  const image = getSmallImg(order.orderItems[0].sku)

  const goToOrderDetails = () => {
    navigate(`/account/orders/${order.id}/`, { state: { order } })
  }

  return (
    <Order onClick={goToOrderDetails}>
      <Order.Header>
        <Image src={image} />
      </Order.Header>
      <Order.Body>
        <P>{orderItems.length} items</P>
        <P>{formatPrice(total)}</P>
        <P>{moment(createdAt).fromNow()}</P>
      </Order.Body>
    </Order>
  )
}

OrderComponent.propTypes = {
  order: PropTypes.object.isRequired
}

export default OrderComponent
