import { RootState } from "../reducers"

export const showRecipeSelector = (state: RootState) => state.showRecipe
export const recipeSelector = (state: RootState) => state.recipe
export const errorSelector = (state: RootState) => state.error
