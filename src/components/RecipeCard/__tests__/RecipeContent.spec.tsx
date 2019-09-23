import React from 'react'
import { Set } from 'immutable'
import { mount } from 'enzyme'
import { List } from 'semantic-ui-react'

import RecipeContent from '../RecipeContent/RecipeContent'

const props = {
  ingredients: Set([{ id: 1, name: "Broccoli" }, { id: 2, name: "Butter" }]),
  instructions: Set([{ step: 1, description: "Boil the broccoli" }, { step: 2, description: "Use the bu-bu-butter" }])
}

describe("RecipeContent component", () => {
  const wrapper = mount(<RecipeContent {...props} />)

  it("renders instructions", () => {
    const instructions = wrapper.find(List).first().text()
    props.instructions.map(i => i.description).forEach(i => expect(instructions).toContain(i))
  })

  it("renders ingredients", () => {
    const ingredients = wrapper.find(List).last().text()
    props.ingredients.map(i => i.name).forEach(i => expect(ingredients).toContain(i))
  })
})
