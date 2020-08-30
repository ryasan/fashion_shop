import React from 'react'
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
import CATEGORY_FILTERS from '../../../types/category-types'
import SIZE_FILTERS from '../../../types/size-types'
import { filtersInitialState } from '../../../graphql/filter/reducer'

const FilterComponent = () => {
    const { data: { sizeFilters, categoryFilters }, refetch } = useFiltersQuery() // prettier-ignore
    const [addCategoryFilter] = useAddCategoryFilterMutation()
    const [removeCategoryFilter] = useRemoveCategoryFilterMutation()
    const [addSizeFilter] = useAddSizeFilterMutation()
    const [removeSizeFilter] = useRemoveSizeFilterMutation()
    const client = useApolloClient()

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

    const resetFilters = () => {
        client.writeData({ data: { ...filtersInitialState } })
        refetch()
    }

    return (
        <Filter>
            <MultiLevelDropdown
                levels={[CATEGORY_FILTERS, SIZE_FILTERS]}
                leftMenuTitle='Sizes'
                rightMenuTitle='Categories'
                onLeftMenuClick={onCategoryClick}
                onRightMenuClick={onSizeClick}
                activeFilters={[...sizeFilters, ...categoryFilters]}
            />
            <Filter.ResetBtn onClick={resetFilters} />
        </Filter>
    )
}

export default FilterComponent
