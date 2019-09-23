import React from 'react'
import { shallow, mount } from 'enzyme'
import { Header } from 'semantic-ui-react'

import RecipeHeader from '../RecipeHeader/RecipeHeader'

const props = {
  title: "Mock Recipe",
  dairyFree: true,
  glutenFree: true,
  vegan: true,
  vegetarian: true,
}

describe("RecipeHeader component", () => {
  const wrapper = mount(<RecipeHeader {...props} />);

  it("renders the title", () => {
    expect(wrapper.find(Header.Content).text()).toEqual(props.title)
  })

  it("renders existing food sensitivities", () => {
    expect(wrapper.find({ name: "leaf" })).toHaveLength(1)
    expect(wrapper.find({ name: "tree" })).toHaveLength(1)
    expect(wrapper.find({ name: "sun outline" })).toHaveLength(1)
    expect(wrapper.find({ name: "chart pie" })).toHaveLength(1)
  })

  it("doesn't render non-existing food sensitivities", () => {
    const wrapper = shallow(<RecipeHeader {...props} dairyFree={false} glutenFree={false} vegan={false} vegetarian={false} />);
    expect(wrapper.find({ name: "leaf" })).toHaveLength(0)
    expect(wrapper.find({ name: "tree" })).toHaveLength(0)
    expect(wrapper.find({ name: "sun outline" })).toHaveLength(0)
    expect(wrapper.find({ name: "chart pie" })).toHaveLength(0)
  })
})
