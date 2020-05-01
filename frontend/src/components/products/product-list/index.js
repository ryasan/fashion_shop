import React from 'react'
import PropTypes from 'prop-types'

import ProductList from './product-list.styles'
import OneProduct from '../product'
import ErrorBoundary from '../../error-boundary'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { useAddCartItemMutation } from '../../../graphql/cart/hooks'

const ProductListComponent = ({ products }) => {
  const [addCartItem, { error: cartError }] = useAddCartItemMutation()
  const { data, error: meError } = useCurrentUserQuery()

  return (
    <ErrorBoundary error={cartError || meError}>
      <ProductList>
        {products.map(p => (
          <OneProduct
            key={p.id}
            product={p}
            addCartItem={addCartItem}
            me={data && data.me}
          />
        ))}
      </ProductList>
    </ErrorBoundary>
  )
}

ProductListComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductListComponent
