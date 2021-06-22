import { takeEvery, call, put } from 'redux-saga/effects'
import {
  NameActionIds,
  updateNames,
  updateNamesFail
} from '../actions/names.action'
import { generateRandomNames } from '../services/names.services'
import data from '../assets/data/names.json'

export function* handleUpdateNames() {
  yield takeEvery(NameActionIds.NAMES_LOADING, dispatchNames)
}

function* dispatchNames() {
  const randomNames: string[] = yield call(generateRandomNames, data)
  if (randomNames[0] === 'Error') {
    yield console.log(randomNames)
    yield put(updateNamesFail(randomNames))
    return
  }

  yield put(updateNames(randomNames))
}
