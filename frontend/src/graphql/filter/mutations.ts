import gql from 'graphql-tag'

export const ADD_SIZE_FILTER_MUTATION = gql`
    mutation($size: Size!) {
        addSizeFilter(size: $size) @client
    }
`

export const REMOVE_SIZE_FILTER_MUTATION = gql`
    mutation($size: Size!) {
        removeSizeFilter(size: $size) @client
    }
`

export const ADD_CATEGORY_FILTER_MUTATION = gql`
    mutation($category: Category!) {
        addCategoryFilter(category: $category) @client
    }
`

export const REMOVE_CATEGORY_FILTER_MUTATION = gql`
    mutation($category: Category!) {
        removeCategoryFilter(category: $category) @client
    }
`

export const SET_FREE_SHIPPING_SELECTED_MUTATION = gql`
    mutation($isSelected: Boolean!) {
        setFreeShippingSelected(isSelected: $isSelected) @client
    }
`
