import { takeLatest, call, put } from 'redux-saga/effects'

import { FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAIL } from '../actions/recipe'
import { fetchRandomRecipe } from '../api/spoonacular'

export function* recipeSaga() {
  yield takeLatest(FETCH_RECIPE_REQUEST, fetchRecipe)
}

function* fetchRecipe() {
  try {
    const recipe = yield call(fetchRandomRecipe)
    yield put({ type: FETCH_RECIPE_SUCCESS, payload: recipe })
  } catch (e) {
    yield put({ type: FETCH_RECIPE_FAIL })
  }
}
