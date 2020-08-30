import { useQuery, useMutation } from '@apollo/react-hooks'

import { FILTERS_QUERY } from './queries'
import {
    SET_FREE_SHIPPING_SELECTED_MUTATION,
    ADD_SIZE_FILTER_MUTATION,
    REMOVE_SIZE_FILTER_MUTATION,
    ADD_CATEGORY_FILTER_MUTATION,
    REMOVE_CATEGORY_FILTER_MUTATION
} from './mutations'

export const useFiltersQuery = () => {
    return useQuery(FILTERS_QUERY)
}

export const useToggleFreeShippingMutation = () => {
    return useMutation(SET_FREE_SHIPPING_SELECTED_MUTATION)
}

export const useAddSizeFilterMutation = () => {
    return useMutation(ADD_SIZE_FILTER_MUTATION)
}

export const useRemoveSizeFilterMutation = () => {
    return useMutation(REMOVE_SIZE_FILTER_MUTATION)
}

export const useAddCategoryFilterMutation = () => {
    return useMutation(ADD_CATEGORY_FILTER_MUTATION)
}

export const useRemoveCategoryFilterMutation = () => {
    return useMutation(REMOVE_CATEGORY_FILTER_MUTATION)
}
