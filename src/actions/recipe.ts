import { Recipe } from '../reducers/recipeReducer'

export const FETCH_RECIPE_REQUEST = "FETCH_RECIPE_REQUEST"
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS"
export const FETCH_RECIPE_FAIL = "FETCH_RECIPE_FAIL"

interface FetchRecipeRequestAction {
  type: typeof FETCH_RECIPE_REQUEST
}

interface FetchRecipeSuccessAction {
  type: typeof FETCH_RECIPE_SUCCESS
  payload: Recipe
}

interface FetchRecipeFailAction {
  type: typeof FETCH_RECIPE_FAIL
}

export type RecipeActionTypes = FetchRecipeRequestAction | FetchRecipeSuccessAction | FetchRecipeFailAction

export const fetchRecipe = (): FetchRecipeRequestAction => ({ type: FETCH_RECIPE_REQUEST })
