import { Set } from 'immutable'

import { RecipeActionTypes, FETCH_RECIPE_REQUEST, FETCH_RECIPE_SUCCESS } from '../actions/recipe'
import { RootState } from '.'

export interface Ingredient {
  id: number
  name: string
}

export interface Instruction {
  step: number
  description: string
}

export interface Recipe {
  title: string
  image: string
  servings: number
  readyInMinutes: number
  sourceName: string
  sourceUrl: string
  dairyFree: boolean
  glutenFree: boolean
  vegan: boolean
  vegetarian: boolean
  ingredients: Set<Ingredient>
  instructions: Set<Instruction>
}

const initialState: RootState = {
  showRecipe: false,
}

export default (state: RootState = initialState, action: RecipeActionTypes): RootState => {
  switch (action.type) {
    case FETCH_RECIPE_REQUEST:
      return {
        showRecipe: true
      }
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        recipe: action.payload
      }
    default:
      return state
  }
}
