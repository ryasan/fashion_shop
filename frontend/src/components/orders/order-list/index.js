import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Orders from './order-list.styles'
import Order from '../order'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import Select from '../../select'
import Pagination from '../../pagination'
import { useOrdersConnectionQuery } from '../../../graphql/order/hooks'
import {
  usePaginationQuery,
  useChangeOrdersPageMutation
} from '../../../graphql/pagination/hooks'

const perPage = 8

const options = [
  { name: 'Choose...', value: 'id_ASC' },
  { name: 'Lowest to highest', value: 'total_ASC' },
  { name: 'Highest to lowest', value: 'total_DESC' },
  { name: 'Earlier', value: 'createdAt_DESC' },
  { name: 'Later', value: 'createdAt_ASC' }
]

const OrderListComponent = ({ me }) => {
  const [orderBy, setOrderBy] = useState('createdAt_DESC')
  const [changeOrdersPage] = useChangeOrdersPageMutation()
  const { data: ordersData } = usePaginationQuery()

  const { ordersPage } = ordersData

  const variables = {
    orderBy,
    skip: (ordersPage - 1) * perPage,
    first: perPage,
    where: { user: { id: me.id } }
  }

  const { data, loading, error } = useOrdersConnectionQuery({ variables })
  const orders = data?.ordersConnection.edges.map(e => e.node)
  const count = data?.ordersCount.aggregate.count
  const totalPages = Math.ceil(count / perPage)

  return (
    <Orders>
      <Select
        options={options}
        onChange={setOrderBy}
        label='Order by'
        selected='id_ASC'
      />
      <Orders.Inner>
        <ErrorBoundary error={error}>
          {loading ? (
            <Loader color='white' />
          ) : (
            <Pagination
              pageInfo={data.ordersConnection.pageInfo}
              totalPages={totalPages}
              currentPage={ordersPage}
              changePage={changeOrdersPage}
            >
              <Orders.List>
                {orders.map(order => (
                  <Order key={order.id} order={order} />
                ))}
              </Orders.List>
            </Pagination>
          )}
        </ErrorBoundary>
      </Orders.Inner>
    </Orders>
  )
}

OrderListComponent.propTypes = {
  me: PropTypes.object.isRequired
}

export default OrderListComponent
