import {SET_FILTER} from 'filter.constants'

export const setFilter = (filter) => ({
      type: SET_FILTER,
      filter,
})