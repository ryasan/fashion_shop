import React, { useState, useEffect } from 'react'

import Filter from './filter.styles'
import {
  useAddSizeFilterMutation,
  useRemoveSizeFilterMutation
} from '../../../graphql/cart/hooks'

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
    <Filter.SingleSize onClick={toggleSelect} isSelected={isSelected}>
      {size}
    </Filter.SingleSize>
  )
}

const FilterComponent = () => {
  return (
    <Filter>
      <Filter.Title>Sizes:</Filter.Title>
      <Filter.Sizes>
        {sizeFilters.map((size, i) => (
          <Size key={i} size={size} />
        ))}
      </Filter.Sizes>
    </Filter>
  )
}

export default FilterComponent
