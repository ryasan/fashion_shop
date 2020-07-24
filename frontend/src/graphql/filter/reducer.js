import {
  ADD_SIZE_FILTER,
  REMOVE_SIZE_FILTER,
  ADD_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER,
  SET_FREE_SHIPPING_SELECTED
} from './action-types'
import { FILTERS_QUERY } from './queries'

export const filtersInitialState = {
  sizeFilters: [],
  categoryFilters: [],
  freeShippingSelected: false
}

const filtersReducer = (actionType, client, variables) => {
  const state = client.readQuery({ query: FILTERS_QUERY })
  const { sizeFilters, categoryFilters } = state
  switch (actionType) {
    case ADD_CATEGORY_FILTER:
      return client.writeData({
        data: {
          ...state,
          categoryFilters: [...categoryFilters, variables.category]
        }
      })

    case REMOVE_CATEGORY_FILTER:
      return client.writeData({
        data: {
          ...state,
          categoryFilters: categoryFilters.filter(c => c !== variables.category)
        }
      })

    case ADD_SIZE_FILTER:
      return client.writeData({
        data: {
          ...state,
          sizeFilters: [...sizeFilters, variables.size]
        }
      })

    case REMOVE_SIZE_FILTER:
      return client.writeData({
        data: {
          ...state,
          sizeFilters: sizeFilters.filter(s => s !== variables.size)
        }
      })

    case SET_FREE_SHIPPING_SELECTED:
      return client.writeData({
        data: {
          ...state,
          freeShippingSelected: variables.isSelected
        }
      })
  }
}

export default filtersReducer
