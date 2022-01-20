import { all } from 'redux-saga/effects'
import guestSearchSagas from './guestSearch/sagas'

export default function* devSaga() {
  yield all([guestSearchSagas()])
}
