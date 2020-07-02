import gql from 'graphql-tag'

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      username
      cart {
        quantity
        product {
          id
          description
          isFreeShipping
          isFeatured
          price
          sku
          style
          title
          availableSizes
        }
      }
    }
  }
`
