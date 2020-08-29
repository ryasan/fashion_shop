import React, { useState, useEffect } from 'react'

import Orders from './order-list.styles'
import Order from '../order'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import Select from '../../select'
import Pagination from '../../pagination'
import { useOrdersConnectionQuery } from '../../../graphql/order/hooks'
import { UserInterface, OrderInterface } from '../../../shared/typings'

const perPage = 8

const options = [
  { name: 'Choose...', value: 'id_ASC' },
  { name: 'Lowest to highest', value: 'total_ASC' },
  { name: 'Highest to lowest', value: 'total_DESC' },
  { name: 'Earlier', value: 'createdAt_DESC' },
  { name: 'Later', value: 'createdAt_ASC' }
]

const ListOfOrders: React.StatelessComponent<{ orders: OrderInterface[] }> = ({
  orders
}) => (
  <Orders.List>
    {orders.map((order: OrderInterface) => (
      <Order key={order.id} order={order} />
    ))}
  </Orders.List>
)

const OrderListComponent: React.FC<{ me: UserInterface }> = ({ me }) => {
  const [orderBy, setOrderBy] = useState('createdAt_DESC')
  const [currentPage, setCurrentPage] = useState(1)

  const variables = {
    orderBy,
    skip: (currentPage - 1) * perPage,
    first: perPage,
    where: { user: { id: me.id } }
  }

  const { data, loading, error } = useOrdersConnectionQuery({ variables })

  const count = data?.info?.count
  const orders = data?.orders
  const totalPages = count ? Math.ceil(count / perPage) : 1

  useEffect(() => {
    if (count) setCurrentPage(Math.min(currentPage, totalPages))
  }, [count])

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
              pageInfo={data?.info?.pageInfo}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            >
              {orders && <ListOfOrders orders={orders} />}
            </Pagination>
          )}
        </ErrorBoundary>
      </Orders.Inner>
    </Orders>
  )
}

export default OrderListComponent
