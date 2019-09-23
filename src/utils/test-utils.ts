import { Set } from "immutable"

import { Recipe } from "../reducers/recipeReducer"
import { RootState } from "../reducers"

export const noop = (...args: any[]): any => { }

export const recipeMock: Recipe = {
  title: "Mock Recipe",
  image: "/logo192.png",
  servings: 5,
  readyInMinutes: 5,
  sourceName: "Iván Herrero",
  sourceUrl: "https://ivanherrero.dev",
  dairyFree: true,
  glutenFree: true,
  vegan: true,
  vegetarian: true,
  ingredients: Set([{ id: 1, name: "Broccoli" }, { id: 2, name: "Butter" }]),
  instructions: Set([{ step: 1, description: "Boil the broccoli" }, { step: 2, description: "Use the bu-bu-butter" }])
}

export const stateMock: RootState = {
  showRecipe: true,
  recipe: recipeMock,
  error: false
}
