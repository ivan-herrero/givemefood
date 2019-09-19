import recipeReducer, { Recipe } from './recipeReducer'

export interface RootState {
  readonly showRecipe: boolean
  readonly recipe?: Recipe
  readonly error: boolean
}

const rootReducer = recipeReducer

export default rootReducer
