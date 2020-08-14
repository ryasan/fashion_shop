import gql from 'graphql-tag'

export const CHANGE_PRODUCTS_PAGE_MUTATION = gql`
  mutation($page: Int) {
    changeProductsPage(page: $page) @client
  }
`

export const CHANGE_ORDERS_PAGE_MUTATION = gql`
  mutation($page: Int) {
    changeOrdersPage(page: $page) @client
  }
`
