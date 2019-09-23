import { call, put } from "redux-saga/effects"
import { Set } from "immutable"

import { fetchRecipe } from "../../sagas/recipe"
import { fetchRandomRecipe } from "../../api/spoonacular"
import { FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAIL } from "../../actions/recipe"
import { Recipe } from "../../reducers/recipeReducer"

const recipe: Recipe = {
  title: "Mock Recipe",
  image: "/logo192.png",
  servings: 5,
  readyInMinutes: 5,
  sourceName: "Iván Herrero",
  sourceUrl: "https://ivanherrero.dev",
  dairyFree: true,
  glutenFree: true,
  vegan: true,
  vegetarian: true,
  ingredients: Set([{ id: 1, name: "Broccoli" }, { id: 2, name: "Butter" }]),
  instructions: Set([{ step: 1, description: "Boil the broccoli" }, { step: 2, description: "Use the bu-bu-butter" }])
}

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
