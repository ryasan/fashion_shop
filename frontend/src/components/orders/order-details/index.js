import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { navigate } from '@reach/router'

import OrderDetails, {
  OrderItem,
  Summary,
  OrderList,
  Text,
  TextKey
} from './order-details.styles'
import LoaderComponent from '../../loader'
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
        <OrderItem.ImageContainer>
          <OrderItem.Image src={getFrontImage(item.sku)} />
        </OrderItem.ImageContainer>
        <OrderItem.Cost>
          <Text><TextKey modifiers='red_color'>price:&nbsp;</TextKey>{formatPrice(item.price)}</Text>
          <Text><TextKey modifiers='red_color'>qty:&nbsp;</TextKey>{item.quantity}</Text>
          <Text><TextKey modifiers='red_color'>total:&nbsp;</TextKey>{(formatPrice(item.price * item.quantity))}</Text>
        </OrderItem.Cost>
        <OrderItem.Info>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </OrderItem.Info>
      </OrderItem>
    </ErrorBoundary>
  )
}

const OrderDetailsComponent = ({ order }) => {
  return (
    <OrderDetails>
      <Summary>
        <Text><TextKey>id:</TextKey>{order.id}</Text>
        <Text><TextKey>charge id:</TextKey>{order.chargeId}</Text>
        <Text><TextKey>total:</TextKey>{formatPrice(order.total)}</Text>
        <Text><TextKey>created:</TextKey>{moment(order.createdAt).format('LL')}</Text>
        <Text><TextKey>updated:</TextKey>{moment(order.updatedAt).format('LL')}</Text>
      </Summary>
      <OrderList>
        {order.orderItems.map(item => (
          <OrderItemComponent key={item.id} item={item} />
        ))}
      </OrderList>
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
