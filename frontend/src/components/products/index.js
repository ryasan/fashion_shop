import React, { useState } from 'react'

import Products from './products.styles'
import ProductList from './product-list'
import ControlsHeader from './controls-header/index'
import ErrorBoundary from '../error-boundary'
import Pagination from '../pagination'
import Loader from '../loader'
import {
  useProductsConnectionQuery,
  useFiltersQuery
} from '../../graphql/product/hooks'

const perPage = 8

const ProductsComponent = () => {
  const [orderBy, setOrderBy] = useState(null)
  const [skip, setSkip] = useState(0)
  const { data: { sizeFilters, freeShippingSelected } } = useFiltersQuery()
  const { data, error, loading } = useProductsConnectionQuery({
    sizeFilters,
    freeShippingSelected,
    orderBy,
    skip,
    first: perPage
  })

  const count = data?.productsCount?.aggregate?.count
  const products = data?.productsConnection.edges.map(e => e.node)
  console.log(data)
  return (
    <Products>
      <ControlsHeader count={count} setOrderBy={setOrderBy} />
      <Products.Container>
        <ErrorBoundary error={error}>
          {loading ? (
            <Loader color="white" />
          ) : (
            <Pagination
              {...data}
              pageInfo={data.productsConnection.pageInfo}
              count={count}
              skip={skip}
              setSkip={setSkip}
              perPage={perPage}>
              <ProductList products={products} />
            </Pagination>
          )}
        </ErrorBoundary>
      </Products.Container>
    </Products>
  )
}

export default ProductsComponent
