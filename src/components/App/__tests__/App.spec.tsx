import React from 'react'
import { shallow } from 'enzyme'
import { Header, Button } from 'semantic-ui-react'

import App from '../App'
import RecipeCardLoader from '../../RecipeCard/RecipeCardLoader/RecipeCardLoader'
import RecipeCard from '../../RecipeCard/RecipeCard'
import { noop, recipeMock as recipe } from '../../../utils/test-utils'

const props = {
  showRecipe: false,
  error: false,
  fetchRecipe: noop
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
