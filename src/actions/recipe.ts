import { Recipe } from '../reducers/recipeReducer'

export const FETCH_RECIPE_REQUEST = "FETCH_RECIPE_REQUEST";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAIL = "FETCH_RECIPE_FAIL"; //TODO: handle this action

interface FetchingRecipeAction {
  type: typeof FETCH_RECIPE_REQUEST
}

interface FetchRecipeAction {
  type: typeof FETCH_RECIPE_SUCCESS
  payload: Recipe
}

export type RecipeActionTypes = FetchingRecipeAction | FetchRecipeAction

export const fetchRecipe = (): FetchingRecipeAction => ({ type: FETCH_RECIPE_REQUEST })
