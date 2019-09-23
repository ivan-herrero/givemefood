import React from 'react'
import { shallow } from 'enzyme'
import { Set } from 'immutable'
import { Image } from 'semantic-ui-react'

import RecipeCard from '../RecipeCard'
import { Recipe } from '../../../reducers/recipeReducer'
import RecipeHeader from '../RecipeHeader/RecipeHeader'
import RecipeDetail from '../RecipeDetail/RecipeDetail'
import RecipeContent from '../RecipeContent/RecipeContent'

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

describe("RecipeCard component", () => {
  const wrapper = shallow(<RecipeCard {...recipe} />);

  it("renders all subcomponents", () => {
    expect(wrapper.find(RecipeHeader)).toHaveLength(1)
    expect(wrapper.find(RecipeDetail)).toHaveLength(1)
    expect(wrapper.find(Image)).toHaveLength(1)
    expect(wrapper.find(RecipeContent)).toHaveLength(1)
  })
})
