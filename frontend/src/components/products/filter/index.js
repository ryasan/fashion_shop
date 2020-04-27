import React, { useState, useEffect } from 'react'

import Filter from './filter.styles'
import {
  useAddSizeFilterMutation,
  useRemoveSizeFilterMutation
} from '../../../graphql/cart/hooks'
import {
  useToggleFreeShippingMutation,
  useFiltersQuery
} from '../../../graphql/product/hooks'

const sizeFilters = ['S', 'M', 'L', 'XL', 'XXL']

const Size = ({ size }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [addSizeFilter] = useAddSizeFilterMutation()
  const [removeSizeFilter] = useRemoveSizeFilterMutation()

  const toggleSelect = () => {
    setIsSelected(prevState => !prevState)
  }

  useEffect(() => {
    const setSizeFilters = isSelected ? addSizeFilter : removeSizeFilter
    setSizeFilters({ variables: { size } })
  }, [isSelected])

  return (
    <Filter.OneSize onClick={toggleSelect} isSelected={isSelected}>
      {size}
    </Filter.OneSize>
  )
}

const FilterComponent = () => {
  const [freeShippingSelected, setFreeShippingSelected] = useState(false)
  const [toggleFreeShippingFilter] = useToggleFreeShippingMutation()

  useEffect(() => {
    toggleFreeShippingFilter()
  }, [freeShippingSelected])

  const toggleFilter = () => {
    setFreeShippingSelected(prevState => !prevState)
  }

  return (
    <Filter>
      <Filter.Title>Sizes:</Filter.Title>
      <Filter.Sizes>
        {sizeFilters.map((size, i) => (
          <Size key={i} size={size} />
        ))}
      </Filter.Sizes>
      <Filter.FreeShipping
        onClick={toggleFilter}
        isSelected={freeShippingSelected}>
        Free shipping
      </Filter.FreeShipping>
    </Filter>
  )
}

export default FilterComponent
