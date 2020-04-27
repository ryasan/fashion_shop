import React, { useState } from 'react'
import { intersection } from 'lodash'

import Products from './products.styles'
import ProductList from './product-list'
import ControlsHeader from './controls-header/index'
import {
  useProductsConnectionQuery,
  useFiltersQuery,
  useProductsQuery
} from '../../graphql/product/hooks'

const isInStock = (sizes, filters) => {
  return intersection(sizes, filters).length > 0
}

const ProductsFilteredBySize = ({ products, setCount }) => {
  const { data: { sizeFilters, freeShippingFilter } } = useFiltersQuery() // prettier-ignore
  const inStock = products.filter(p => {
    return isInStock(p.availableSizes, sizeFilters)
  })
  const productIds = inStock.map(p => p.id)

  const filters = {
    AND: [
      { isFreeShipping: freeShippingFilter || undefined },
      { id_in: productIds.length > 0 ? productIds : undefined }
    ]
  }

  const { data, error, loading } = useProductsConnectionQuery({ filters })

  if (loading) return <Products.Loader color="white" />
  if (error) return <Products.ErrorBoundary error={error} />

  const filteredProducts = data.productsConnection.edges
  const count = data.productsConnection.aggregate.count
  setCount(count)

  return <ProductList products={filteredProducts} />
}

const ProductsComponent = () => {
  const [count, setCount] = useState(null)
  const { data, error, loading } = useProductsQuery()

  return (
    <Products>
      <ControlsHeader count={count} />
      <Products.Container>
        <Products.ErrorBoundary error={error}>
          {loading ? (
            <Products.Loader color="white" />
          ) : (
            <ProductsFilteredBySize
              products={data.products}
              setCount={setCount}
            />
          )}
        </Products.ErrorBoundary>
      </Products.Container>
    </Products>
  )
}

export default ProductsComponent
