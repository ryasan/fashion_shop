import React from 'react'

import ControlsHeader from './controls-header.styles'
import Filter from '../filter/index'
import Sort from '../sort/index'
import { useProductsConnection } from '../../../graphql/product/hooks'

const ControlsHeaderComponent = () => {
  const { data, loading, error } = useProductsConnection()
  const count = data?.productsConnection.aggregate.count

  return (
    <ControlsHeader.ErrorBoundary error={error}>
      <ControlsHeader>
        <Filter />
        <ControlsHeader.Count>
          {loading ? 'Loading...' : `Found ${count} items`}
        </ControlsHeader.Count>
        <Sort />
      </ControlsHeader>
    </ControlsHeader.ErrorBoundary>
  )
}

export default ControlsHeaderComponent
