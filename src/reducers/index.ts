import recipeReducer, { Recipe } from './recipeReducer'

export interface RootState {
  readonly showRecipe: boolean
  readonly recipe?: Recipe
}

const rootReducer = recipeReducer

export default rootReducer
