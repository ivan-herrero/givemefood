import { fetchRecipe, FETCH_RECIPE_REQUEST } from "../recipe"

describe("fetchRecipe action creator", () => {
  it("creates an action to start fetching a recipe", () => {
    const expectedAction = {
      type: FETCH_RECIPE_REQUEST
    }
    expect(fetchRecipe()).toEqual(expectedAction)
  })
})
