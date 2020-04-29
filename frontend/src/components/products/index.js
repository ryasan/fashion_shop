import React, { useState } from 'react'

import Products from './products.styles'
import ProductList from './product-list'
import ControlsHeader from './controls-header/index'
import ErrorBoundary from '../error-boundary'
import Loader from '../loader/loader.styles'
import {
  useProductsConnectionQuery,
  useFiltersQuery
} from '../../graphql/product/hooks'
const ProductsComponent = () => {
  const [orderBy, setOrderBy] = useState(null)
  const { data: { sizeFilters, freeShippingSelected } } = useFiltersQuery() // prettier-ignore
  const { data, error, loading } = useProductsConnectionQuery({
    sizeFilters,
    freeShippingSelected,
    orderBy
  })
  const count = data?.productsConnection?.aggregate?.count
  const products = data?.productsConnection.edges.map(e => e.node)

  return (
    <Products>
      <ControlsHeader count={count} setOrderBy={setOrderBy} />
      <Products.Container>
        <ErrorBoundary error={error}>
          {loading ? (
            <Loader color="white" />
          ) : (
            <ProductList products={products} />
          )}
        </ErrorBoundary>
      </Products.Container>
    </Products>
  )
}

export default ProductsComponent
