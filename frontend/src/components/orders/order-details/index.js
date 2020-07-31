import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { navigate } from '@reach/router'

import OrderDetails, { OrderItem } from './order-details.styles'
import LoaderComponent from '../../loader'
import { P, Span, Image } from '../../../elements'
import { formatPrice, getFrontImage } from '../../../utils'
import { useProductQuery } from '../../../graphql/product/hooks'
import ErrorBoundary from '../../error-boundary/index'

const OrderItemComponent = ({ item }) => {
  const { data, loading, error } = useProductQuery({
    variables: { where: { sku: item.sku } }
  })

  const goToProductDetails = item => {
    navigate(`/shop/${data.product.id}/`)
  }

  if (loading) {
    return <LoaderComponent size='small' />
  }
  return (
    <ErrorBoundary error={error}>
      <OrderItem key={item.id} onClick={() => goToProductDetails(item)}>
        <OrderItem.Image>
          <Image src={getFrontImage(item.sku)} />
        </OrderItem.Image>
        <OrderItem.Cost>
          <P><Span>price:</Span>{formatPrice(item.price)}</P>
          <P><Span>qty:</Span>{item.quantity}</P>
          <P><Span>total:</Span>{(formatPrice(item.price * item.quantity))}</P>
        </OrderItem.Cost>
        <OrderItem.Info>
          <P>{item.title}</P>
          <P>{item.description}</P>
        </OrderItem.Info>
      </OrderItem>
    </ErrorBoundary>
  )
}

const OrderDetailsComponent = ({ order }) => {

  return (
    <OrderDetails>
      <OrderDetails.Summary>
        <P><Span>id:</Span>{order.id}</P>
        <P><Span>charge id:</Span>{order.chargeId}</P>
        <P><Span>total:</Span>{formatPrice(order.total)}</P>
        <P><Span>created:</Span>{moment(order.createdAt).format('LL')}</P>
        <P><Span>updated:</Span>{moment(order.updatedAt).format('LL')}</P>
      </OrderDetails.Summary>
      <OrderDetails.Items>
        {order.orderItems.map(item => (
          <OrderItemComponent key={item.id} item={item} />
        ))}
      </OrderDetails.Items>
    </OrderDetails>
  )
}

OrderDetailsComponent.propTypes = {
  order: PropTypes.shape({
    chargeId: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    id: PropTypes.string.isRequired,
    orderItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    total: PropTypes.number.isRequired
  })
}

export default OrderDetailsComponent
