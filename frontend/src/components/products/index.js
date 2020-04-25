import React from 'react'

import Products from './products.styles'
import ProductList from './product-list'
import ControlsHeader from './controls-header/index'
import {
  useProductsConnectionQuery,
  useFiltersQuery
} from '../../graphql/product/hooks'

const ProductsComponent = () => {
  const { data: { sizeFilters, freeShippingFilter } } = useFiltersQuery() // prettier-ignore
  const { data, error, loading } = useProductsConnectionQuery({
    sizeFilters,
    freeShippingFilter
  })
  const products = data?.productsConnection.edges
  const count = data?.productsConnection.aggregate.count

  return (
    <Products>
      <ControlsHeader count={count} />
      <Products.Container>
        <Products.ErrorBoundary error={error}>
          {loading ? (
            <Products.Loader color="white" />
          ) : (
            <ProductList products={products} />
          )}
        </Products.ErrorBoundary>
      </Products.Container>
    </Products>
  )
}

export default ProductsComponent
