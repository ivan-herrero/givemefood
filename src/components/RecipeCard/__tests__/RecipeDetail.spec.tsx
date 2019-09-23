import React from 'react'
import { mount } from 'enzyme'

import RecipeDetail from '../RecipeDetail/RecipeDetail'

const props = {
  servings: 5,
  readyInMinutes: 5,
  sourceName: "Iván Herrero",
  sourceUrl: "https://ivanherrero.dev",
}

describe("RecipeDetail component", () => {
  const wrapper = mount(<RecipeDetail {...props} />);

  it("renders servings", () => {
    expect(wrapper.find({ name: "spoon" })).toHaveLength(1)
    expect(wrapper.find(".detail").first().text().trim()).toEqual(props.servings.toString())
  })

  it("renders time to prepare", () => {
    expect(wrapper.find({ name: "clock outline" })).toHaveLength(1)
    expect(wrapper.find(".detail").at(1).text().trim()).toEqual(props.readyInMinutes.toString() + "m")
  })

  it("renders source", () => {
    expect(wrapper.find({ name: "location arrow" })).toHaveLength(1)
    const sourceLink = wrapper.find(`[href='${props.sourceUrl}']`)
    expect(sourceLink.text()).toEqual(props.sourceName)
  })
})
