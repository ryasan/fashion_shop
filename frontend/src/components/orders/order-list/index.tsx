import React, { useState } from 'react'

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
import { UserInterface, OrderItemInterface } from '../../../shared/typings'

const perPage = 8

const options = [
  { name: 'Choose...', value: 'id_ASC' },
  { name: 'Lowest to highest', value: 'total_ASC' },
  { name: 'Highest to lowest', value: 'total_DESC' },
  { name: 'Earlier', value: 'createdAt_DESC' },
  { name: 'Later', value: 'createdAt_ASC' }
]

const OrderListComponent = ({ me }: { me: UserInterface }) => {
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

  const count = data?.ordersCount.aggregate.count
  const totalPages = Math.ceil(count / perPage)
  const orders = data?.ordersConnection.edges.map(
    ({ node }: { node: OrderItemInterface }) => node
  )

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
                {orders.map((order: any) => (
                  <Order key={order.id} item={order} />
                ))}
              </Orders.List>
            </Pagination>
          )}
        </ErrorBoundary>
      </Orders.Inner>
    </Orders>
  )
}

export default OrderListComponent
