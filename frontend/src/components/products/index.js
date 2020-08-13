import React, { useState, useEffect } from 'react'

import Products from './products.styles'
import ProductList from './product-list'
import ControlsHeader from './controls-header/index'
import ErrorBoundary from '../error-boundary'
import Pagination from '../pagination'
import Loader from '../loader'
import { useProductsConnectionQuery } from '../../graphql/product/hooks'
import { useFiltersQuery } from '../../graphql/filter/hooks'

const perPage = 8

const ProductsComponent = () => {
  const [orderBy, setOrderBy] = useState(null)
  const [skip, setSkip] = useState(0)
  const {
    data: { sizeFilters, categoryFilters, freeShippingSelected }
  } = useFiltersQuery()
  const { data, error, loading } = useProductsConnectionQuery({
    sizeFilters,
    categoryFilters,
    freeShippingSelected,
    orderBy,
    skip,
    first: perPage
  })

  const count = data?.productsCount.aggregate.count
  const products = data?.productsConnection.edges.map(e => e.node)

  useEffect(() => {
    setSkip(0)
  }, [sizeFilters.length, categoryFilters.length, freeShippingSelected])

  return (
    <Products>
      <ControlsHeader count={count} setOrderBy={setOrderBy} />
      <Products.Container>
        <ErrorBoundary error={error}>
          {loading ? (
            <Loader color='white' />
          ) : (
            <Pagination
              pageInfo={data.productsConnection.pageInfo}
              count={count}
              skip={skip}
              setSkip={setSkip}
              perPage={perPage}
            >
              <ProductList products={products} />
            </Pagination>
          )}
        </ErrorBoundary>
      </Products.Container>
    </Products>
  )
}

export default ProductsComponent
