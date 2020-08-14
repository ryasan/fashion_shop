import React, { useState, useEffect } from 'react'

import Products from './products.styles'
import ProductList from './product-list'
import ControlsHeader from './controls-header/index'
import ErrorBoundary from '../error-boundary'
import Pagination from '../pagination'
import Loader from '../loader'
import { useProductsConnectionQuery } from '../../graphql/product/hooks'
import { useFiltersQuery } from '../../graphql/filter/hooks'
import {
  usePaginationQuery,
  useChangeProductsPageMutation
} from '../../graphql/pagination/hooks'

const perPage = 8

const ProductsComponent = () => {
  const [orderBy, setOrderBy] = useState(null)
  const [changeProductsPage] = useChangeProductsPageMutation()
  const { data: { productsPage } } = usePaginationQuery() // prettier-ignore
  const { data: { sizeFilters, categoryFilters, freeShippingSelected } } = useFiltersQuery() // prettier-ignore
  const { data, error, loading } = useProductsConnectionQuery({
    sizeFilters,
    categoryFilters,
    freeShippingSelected,
    orderBy,
    skip: (productsPage - 1) * perPage,
    first: perPage
  })
  const count = data?.productsCount.aggregate.count
  const products = data?.productsConnection.edges.map(e => e.node)
  const totalPages = Math.ceil(count / perPage)

  useEffect(() => {
    if (count) {
      changeProductsPage({
        variables: {
          page: Math.min(productsPage, totalPages)
        }
      })
    }
  }, [count])

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
              totalPages={totalPages}
              currentPage={productsPage}
              changePage={changeProductsPage}
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
