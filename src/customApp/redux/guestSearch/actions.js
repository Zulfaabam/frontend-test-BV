const actions = {
  GUEST_SEARCH: 'GUEST_SEARCH',
  GUEST_SUCCESS_RESULT: 'GUEST_SUCCESS_RESULT',
  GUEST_ERROR_RESULT: 'GUEST_ERROR_RESULT',
  guestSearch: (searchText) => ({
    type: actions.GUEST_SEARCH,
    searchText,
  }),
  guestSearchSuccess: (result) => ({
    type: actions.GUEST_SUCCESS_RESULT,
    result,
  }),
  guestSearchError: (error) => ({
    type: actions.GUEST_ERROR_RESULT,
    error,
  }),
}
export default actions
