import React from 'react'

import Filter from './filter.styles'
import MultiLevelDropdown from '../../muli-level-dropdown'
import {
  useFiltersQuery,
  useAddSizeFilterMutation,
  useRemoveSizeFilterMutation,
  useAddCategoryFilterMutation,
  useRemoveCategoryFilterMutation
} from '../../../graphql/filter/hooks'
import CATEGORY_FILTERS from '../../../types/category-types.js'
import SIZE_FILTERS from '../../../types/size-types.js'

// TODO: add free shipping filter

const FilterComponent = () => {
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

  return (
    <Filter>
      <MultiLevelDropdown
        levels={[CATEGORY_FILTERS, SIZE_FILTERS]}
        leftMenuTitle='Categories'
        rightMenuTitle='Sizes'
        onLeftMenuClick={onCategoryClick}
        onRightMenuClick={onSizeClick}
      />
    </Filter>
  )
}

export default FilterComponent
