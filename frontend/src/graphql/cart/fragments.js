import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'

export const CART_ITEM_FRAGMENT = gql`
  fragment CartItemFragment on Product {
    ...ProductFragment
    quantity
  }
  ${PRODUCT_FRAGMENT}
`
