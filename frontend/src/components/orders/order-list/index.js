import React from 'react'
import PropTypes from 'prop-types'

import Orders from './order-list.styles'
import Order from '../order'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import { useOrdersQuery } from '../../../graphql/order/hooks'

const OrderListComponent = ({ me }) => {
  const where = {
    ...(me && { user: { id: me.id } })
  }
  const { data, loading, error } = useOrdersQuery({ variables: { where } })

  return (
    <Orders>
      <ErrorBoundary error={error}>
        {loading ? (
          <Loader color="white" />
        ) : (
          <Orders.List>
            {data.orders.map(order => (
              <Order key={order.id} order={order} />
            ))}
          </Orders.List>
        )}
      </ErrorBoundary>
    </Orders>
  )
}

OrderListComponent.propTypes = {
  me: PropTypes.object.isRequired
}

export default OrderListComponent
