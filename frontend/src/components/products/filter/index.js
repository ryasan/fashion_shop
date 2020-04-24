import React, { useState } from 'react'

import Filter from './filter.styles'

const sizeFilters = ['S', 'M', 'L', 'XL', 'XXL']

const Size = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false)

  const toggleSelect = () => {
    setIsSelected(prevState => !prevState)
  }

  return (
    <Filter.SingleSize onClick={toggleSelect} isSelected={isSelected}>
      {children}
    </Filter.SingleSize>
  )
}

const FilterComponent = () => {
  return (
    <Filter>
      <Filter.Title>Sizes:</Filter.Title>
      <Filter.Sizes>
        {sizeFilters.map((size, i) => (
          <Size key={i}>{size}</Size>
        ))}
      </Filter.Sizes>
    </Filter>
  )
}

export default FilterComponent
