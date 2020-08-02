import React, { useEffect } from 'react'
import { useApolloClient } from '@apollo/react-hooks'

import Filter from './filter.styles'
import MultiLevelDropdown from '../../multi-level-dropdown'
import {
  useFiltersQuery,
  useAddSizeFilterMutation,
  useRemoveSizeFilterMutation,
  useAddCategoryFilterMutation,
  useRemoveCategoryFilterMutation
} from '../../../graphql/filter/hooks'
import CATEGORY_FILTERS from '../../../types/category-types.js'
import SIZE_FILTERS from '../../../types/size-types.js'
import { filtersInitialState } from '../../../graphql/filter/reducer'

const FilterComponent = () => {
  const client = useApolloClient()
  const { data: { sizeFilters, categoryFilters } } = useFiltersQuery() // prettier-ignore
  const [addCategoryFilter] = useAddCategoryFilterMutation()
  const [removeCategoryFilter] = useRemoveCategoryFilterMutation()
  const [addSizeFilter] = useAddSizeFilterMutation()
  const [removeSizeFilter] = useRemoveSizeFilterMutation()

  const onCategoryClick = i => {
    const category = CATEGORY_FILTERS[i]

    if (categoryFilters.includes(category)) {
      removeCategoryFilter({ variables: { category } })
    } else {
      addCategoryFilter({ variables: { category } })
    }
  }

  const onSizeClick = i => {
    const size = SIZE_FILTERS[i]

    if (sizeFilters.includes(size)) {
      removeSizeFilter({ variables: { size } })
    } else {
      addSizeFilter({ variables: { size } })
    }
  }

  useEffect(() => {
    return () => {
      client.writeData({ data: { ...filtersInitialState } })
    }
  }, [])

  return (
    <Filter>
      <MultiLevelDropdown
        levels={[CATEGORY_FILTERS, SIZE_FILTERS]}
        leftMenuTitle='Sizes'
        rightMenuTitle='Categories'
        onLeftMenuClick={onCategoryClick}
        onRightMenuClick={onSizeClick}
      />
    </Filter>
  )
}

export default FilterComponent
