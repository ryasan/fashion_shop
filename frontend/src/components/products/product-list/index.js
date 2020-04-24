import React from 'react'

import ProductList from './product-list.styles'
import OneProduct from '../product'
import ErrorBoundary from '../../error-boundary'
import { useProductsQuery } from '../../../graphql/product/hooks'

const ProductListComponent = () => {
  const { data, error, loading } = useProductsQuery()

  if (loading) return <ProductList.Loader color="white" />
  if (!data.products.length)
    return (
      <ProductList.Text modifiers="offWhiteColor">
        0 Items Found
      </ProductList.Text>
    )

  return (
    <ProductList>
      <ErrorBoundary error={error}>
        {data.products.map(p => {
          return <OneProduct key={p.id} product={p} />
        })}
      </ErrorBoundary>
    </ProductList>
  )
}

export default ProductListComponent
