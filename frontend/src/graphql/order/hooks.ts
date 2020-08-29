import { useMutation, useQuery } from '@apollo/react-hooks'

import { ORDERS_QUERY, ORDERS_CONNECTION_QUERY } from './queries'
import { CREATE_ORDER_MUTATION } from './mutations'
import { CURRENT_USER_QUERY } from '../user/queries'
import { OrderInterface } from '../../shared/typings'
import { mapImages } from '../../shared/utils'

interface VariablesInterface {
  variables: {
    orderBy?: string
    skip?: number
    first?: number
    where: { user: { id: string } }
  }
}

interface OrdersConnectionInterface {
  data: {
    info: {
      count: number
      pageInfo: any
    }
    orders: OrderInterface[]
  }
  error: any
  loading: boolean
}

export const useCreateOrderMutation = () => {
  return useMutation(CREATE_ORDER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}

export const useOrdersQuery = ({ variables }: VariablesInterface) => {
  return useQuery(ORDERS_QUERY, { variables, fetchPolicy: 'network-only' })
}

export const useOrdersConnectionQuery = ({ variables }: VariablesInterface) => {
  const { data, loading, error } = useQuery(ORDERS_CONNECTION_QUERY, {
    variables,
    fetchPolicy: 'network-only'
  })

  return <OrdersConnectionInterface>{
    data: data
      ? {
          info: {
            count: data.ordersCount.aggregate.count,
            pageInfo: data.ordersConnection?.pageInfo
          },
          orders: data.ordersConnection.edges.map(
            (e: { node: OrderInterface }) => {
              return {
                ...e.node,
                orderItems: e.node.orderItems.map(item => console.log(item) || ({
                  ...item,
                  imageMap: mapImages(item.images)
                }))
              }
            }
          )
        }
      : null,
    error,
    loading
  }
}
