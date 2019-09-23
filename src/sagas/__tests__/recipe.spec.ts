import { call, put } from "redux-saga/effects"

import { fetchRecipe } from "../../sagas/recipe"
import { fetchRandomRecipe } from "../../api/spoonacular"
import { FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAIL } from "../../actions/recipe"
import { recipeMock as recipe } from "../../utils/test-utils"

describe("fetchRecipe saga", () => {
  const generator = fetchRecipe()

  it("calls the fetch random recipe API", () => {
    expect(generator.next().value).toEqual(call(fetchRandomRecipe))
  })

  it("dispatches an action with the received recipe", () => {
    const action = {
      type: FETCH_RECIPE_SUCCESS,
      payload: recipe
    }
    expect(generator.next(recipe).value).toEqual(put(action))
  })

  it("dispatches an error action if the saga fails", () => {
    const action = {
      type: FETCH_RECIPE_FAIL,
    }
    expect(generator.throw(Error("Oops")).value).toEqual(put(action))
  })

  it("finishes the saga", () => {
    expect(generator.next().done).toEqual(true)
  })
})
