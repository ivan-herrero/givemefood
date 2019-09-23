import { stateMock as state } from "../../utils/test-utils"
import { showRecipeSelector, recipeSelector, errorSelector } from "../recipe"

describe("recipe selectors", () => {
  it("showRecipeSelector returns the showRecipe flag", () => {
    expect(showRecipeSelector(state)).toEqual(state.showRecipe)
  })

  it("recipeSelector returns the recipe object", () => {
    expect(recipeSelector(state)).toEqual(state.recipe)
  })

  it("errorSelector returns the error flag", () => {
    expect(errorSelector(state)).toEqual(state.error)
  })
})
