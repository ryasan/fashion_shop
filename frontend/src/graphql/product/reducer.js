import { ADD_SIZE_FILTER, REMOVE_SIZE_FILTER } from './action-types'
import { FILTERS_QUERY } from './queries'

export const filtersInitialState = {
  sizeFilters: []
}

const filtersReducer = (actionType, client, variables) => {
  const state = client.readQuery({ query: FILTERS_QUERY })
  const { sizeFilters } = state
  switch (actionType) {
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
  }
}

export default filtersReducer
