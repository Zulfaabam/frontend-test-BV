import { all, takeEvery, put, call } from 'redux-saga/effects'
import actions from './actions'
const guestSearchApi = `https://bv-online-assessment.herokuapp.com/api/bookings`

const onSearchRequest = async (searchText) =>
  await fetch(`${guestSearchApi}/${searchText}`, { method: 'GET' })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => {
      throw error
    })

function* searchRequest(searchText) {
  try {
    const searchResult = yield call(onSearchRequest, searchText)
    yield put(actions.guestSearchSuccess(searchResult))
    // if (searchResult) {
    //   yield put(actions.guestSearchSuccess(searchResult))
    // } else {
    //   yield put(actions.guestSearchSuccess())
    // }
  } catch (error) {
    yield put(actions.guestSearchError(error))
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GUEST_SEARCH, searchRequest)])
}
