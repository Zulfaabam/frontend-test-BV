import actions from './actions'

const initState = {
  searchText: '',
  result: {},
  loading: false,
  error: false,
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GUEST_SEARCH:
      return {
        ...state,
        loading: true,
        searchText: action.searchText,
      }
    case actions.GUEST_SUCCESS_RESULT:
      return {
        ...state,
        loading: false,
        error: false,
        result: action.result,
      }
    case actions.GUEST_ERROR_RESULT:
      return {
        ...state,
        loading: false,
        error: true,
        result: {},
      }
    default:
      return state
  }
}
