import { CHANGE_PRODUCTS_PAGE, CHANGE_ORDERS_PAGE } from './action-types'
import { PAGINATION_QUERY } from './queries'

export const paginationInitialState = {
  productsPage: 1,
  ordersPage: 1
}

const paginationReducer = (actionType, client, variables) => {
  switch (actionType) {
    case CHANGE_ORDERS_PAGE:
      return client.writeData({
        data: { ordersPage: variables.page }
      })
    case CHANGE_PRODUCTS_PAGE:
      return client.writeData({
        data: { productsPage: variables.page }
      })
    default:
      return client.readQuery({
        query: PAGINATION_QUERY
      })
  }
}

export default paginationReducer
