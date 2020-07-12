import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Orders from './order-list.styles'
import Order from '../order'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import OrderBy from '../../order-by'
import { useOrdersQuery } from '../../../graphql/order/hooks'

const options = [
  { name: 'Choose...', value: 'createdAt_DESC' },
  { name: 'Lowest to highest', value: 'total_ASC' },
  { name: 'Highest to lowest', value: 'total_DESC' },
  { name: 'Earlier', value: 'createdAt_DESC' },
  { name: 'Later', value: 'createdAt_ASC' }
]

const OrderListComponent = ({ me }) => {
  const [orderBy, setOrderBy] = useState('createdAt_DESC')

  const variables = {
    where: { user: { id: me.id } },
    orderBy
  }

  const { data, loading, error } = useOrdersQuery({ variables })

  return (
    <Orders>
      <OrderBy options={options} setOrderBy={setOrderBy} />
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
