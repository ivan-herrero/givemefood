import { RootState } from "../reducers"

export const showRecipeSelector = (state: RootState) => state.showRecipe
export const recipeSelector = (state: RootState) => state.recipe
