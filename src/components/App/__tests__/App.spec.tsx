import React from 'react'
import { shallow } from 'enzyme'
import { Set } from 'immutable'
import { Header, Button } from 'semantic-ui-react'

import App from '../App'
import RecipeCardLoader from '../../RecipeCard/RecipeCardLoader/RecipeCardLoader'
import RecipeCard from '../../RecipeCard/RecipeCard'
import { Recipe } from '../../../reducers/recipeReducer'

const props = {
  showRecipe: false,
  error: false,
  fetchRecipe: () => { }
}

const recipe: Recipe = {
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

describe("App component", () => {

  it("renders the welcome text and button", () => {
    const wrapper = shallow(<App {...props} />)
    expect(wrapper.find(Header)).toHaveLength(1)
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it("renders the loader when a recipe is not yet available", () => {
    const wrapper = shallow(<App {...props} showRecipe={true} />)
    expect(wrapper.find(RecipeCardLoader)).toHaveLength(1)
  })

  it("renders the recipe card and the try again button when there's a recipe", () => {
    const wrapper = shallow(<App {...props} showRecipe={true} recipe={recipe} />)
    expect(wrapper.find(RecipeCard)).toHaveLength(1)
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it("renders the error message and the try again button when there's an error", () => {
    const wrapper = shallow(<App {...props} error={true} />)
    expect(wrapper.find(".error-container")).toHaveLength(1)
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it("calls fetchRecipe if the button is clicked", () => {
    const callback = jest.fn()
    const wrapper = shallow(<App {...props} fetchRecipe={callback} />)
    wrapper.find(Button).simulate("click")
    expect(callback.mock.calls).toHaveLength(1)
  })
})
