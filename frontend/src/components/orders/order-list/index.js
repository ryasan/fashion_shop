import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Orders from './order-list.styles'
import Order from '../order'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import OrderBy from '../../order-by'
import Pagination from '../../pagination'
import { useOrdersConnectionQuery } from '../../../graphql/order/hooks'

const perPage = 8

const options = [
  { name: 'Choose...', value: 'createdAt_DESC' },
  { name: 'Lowest to highest', value: 'total_ASC' },
  { name: 'Highest to lowest', value: 'total_DESC' },
  { name: 'Earlier', value: 'createdAt_DESC' },
  { name: 'Later', value: 'createdAt_ASC' }
]

const OrderListComponent = ({ me }) => {
  const [orderBy, setOrderBy] = useState('createdAt_DESC')
  const [skip, setSkip] = useState(0)

  const variables = {
    orderBy,
    skip,
    first: perPage,
    where: { user: { id: me.id } }
  }

  const { data, loading, error } = useOrdersConnectionQuery({ variables })
  const orders = data?.ordersConnection.edges.map(e => e.node)
  const count = data?.ordersCount.aggregate.count

  return (
    <Orders>
      <OrderBy options={options} setOrderBy={setOrderBy} />
      <ErrorBoundary error={error}>
        {loading ? (
          <Loader color="white" />
        ) : (
          <Pagination
            pageInfo={data.ordersConnection.pageInfo}
            count={count}
            skip={skip}
            setSkip={setSkip}
            perPage={perPage}>
            <Orders.List>
              {orders.map(order => (
                <Order key={order.id} order={order} />
              ))}
            </Orders.List>
          </Pagination>
        )}
      </ErrorBoundary>
    </Orders>
  )
}

OrderListComponent.propTypes = {
  me: PropTypes.object.isRequired
}

export default OrderListComponent
