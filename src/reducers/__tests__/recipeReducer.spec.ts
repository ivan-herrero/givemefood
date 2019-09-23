import recipeReducer from "../recipeReducer"
import { FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS, FetchRecipeSuccessAction, FETCH_RECIPE_FAIL, FetchRecipeFailAction } from "../../actions/recipe"
import { recipeMock } from "../../utils/test-utils"

describe("recipe reducer", () => {
  const initialState = {
    showRecipe: true,
    error: false
  }

  it("handles FETCH_RECIPE_REQUEST", () => {
    const expectedState = {
      showRecipe: true,
      error: false
    }
    const state = recipeReducer(initialState, { type: FETCH_RECIPE_REQUEST })
    expect(state).toEqual(expectedState)
  })

  it("handles FETCH_RECIPE_SUCCESS", () => {
    const expectedState = {
      ...initialState,
      recipe: recipeMock
    }
    const action: FetchRecipeSuccessAction = {
      type: FETCH_RECIPE_SUCCESS,
      payload: recipeMock
    }
    const state = recipeReducer(initialState, action)
    expect(state).toEqual(expectedState)
  })

  it("handles FETCH_RECIPE_FAIL", () => {
    const expectedState = {
      showRecipe: false,
      error: true
    }
    const action: FetchRecipeFailAction = {
      type: FETCH_RECIPE_FAIL
    }
    const state = recipeReducer(initialState, action)
    expect(state).toEqual(expectedState)
  })
})
