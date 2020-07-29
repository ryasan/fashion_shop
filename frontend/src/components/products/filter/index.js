import React, { useState, useEffect } from 'react'
import { capitalCase } from 'change-case'

import Filter, { Round, WideBox } from './filter.styles'
import {
  useAddSizeFilterMutation,
  useRemoveSizeFilterMutation,
  useToggleFreeShippingMutation,
  useAddCategoryFilterMutation,
  useRemoveCategoryFilterMutation
} from '../../../graphql/filter/hooks'
import {
  ACCESSORY,
  BEANIE,
  HOODIE,
  LONG_SLEEVE,
  SHIRT,
  SHORTS
} from '../../../types/category-types.js'
import {
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
  XXL_LARGE
} from '../../../types/size-types.js'

const sizeFilters = [SMALL, MEDIUM, LARGE, X_LARGE, XXL_LARGE]
const categoryFilters = [ACCESSORY, BEANIE, HOODIE, LONG_SLEEVE, SHIRT, SHORTS]

const RoundButton = ({ size }) => {
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
    <Round.Button onClick={toggleSelect} isSelected={isSelected}>
      {size}
    </Round.Button>
  )
}

const WideButton = ({ category }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [addCategoryFilter] = useAddCategoryFilterMutation()
  const [removeCategoryFilter] = useRemoveCategoryFilterMutation()

  const toggleSelect = () => {
    setIsSelected(prevState => !prevState)
  }

  useEffect(() => {
    const setCategoryFilters = isSelected
      ? addCategoryFilter
      : removeCategoryFilter
    setCategoryFilters({ variables: { category } })
  }, [isSelected])

  return (
    <WideBox.Button onClick={toggleSelect} isSelected={isSelected}>
      {capitalCase(category)}
    </WideBox.Button>
  )
}

const FilterComponent = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [setFreeShippingSelected] = useToggleFreeShippingMutation()

  useEffect(() => {
    setFreeShippingSelected({ variables: { isSelected } })
  }, [isSelected])

  const toggleFreeShippingSelected = () => {
    setIsSelected(prevState => !prevState)
  }

  return (
    <Filter>
      <Filter.Title>Filters:</Filter.Title>
      <Filter.ButtonGroup>
        <WideBox>
          {categoryFilters.map((category, i) => (
            <WideButton key={i} category={category}>
              {capitalCase(category)}
            </WideButton>
          ))}
          <WideBox.Button
            onClick={toggleFreeShippingSelected}
            isSelected={isSelected}
          >
            Free shipping
          </WideBox.Button>
        </WideBox>
        <Round>
          {sizeFilters.map((size, i) => (
            <RoundButton key={i} size={size} />
          ))}
        </Round>
      </Filter.ButtonGroup>
    </Filter>
  )
}

export default FilterComponent
