import { Set } from 'immutable'

import { Recipe } from '../reducers/recipeReducer'

const BASE_URL = 'https://api.spoonacular.com'
// Not a good idea to expose API keys on the client side, but since we're not
// using any backend and this is a pet project, we'll go with it
const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY

interface ExtendedIngredient {
  id: number
  original: string
}

interface AnalyzedInstruction {
  steps: {
    number: number, step: string
  }[]
}

export interface SpoonacularRecipe {
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
  extendedIngredients: ExtendedIngredient[]
  analyzedInstructions: AnalyzedInstruction[]
}

interface SpoonacularRandomRecipeResponse {
  recipes: SpoonacularRecipe[]
}

const handleErrors = (response: Response): Response => {
  if (!response.ok)
    throw Error(response.statusText)

  return response
}

export const fetchRandomRecipe = (): Promise<Recipe> => {

  const parseResponse = (response: SpoonacularRandomRecipeResponse): Recipe => {
    const recipe = response.recipes[0]
    return {
      ...recipe,
      ingredients: Set(recipe.extendedIngredients.map(i => ({ id: i.id, name: i.original }))),
      instructions: Set(recipe.analyzedInstructions[0].steps.map(i => ({ step: i.number, description: i.step })))
    }
  }

  return fetch(`${BASE_URL}/recipes/random?apiKey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json())
    .then(parseResponse)
}
