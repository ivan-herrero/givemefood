import React from 'react'
import { shallow } from 'enzyme'
import { Image } from 'semantic-ui-react'

import RecipeCard from '../RecipeCard'
import RecipeHeader from '../RecipeHeader/RecipeHeader'
import RecipeDetail from '../RecipeDetail/RecipeDetail'
import RecipeContent from '../RecipeContent/RecipeContent'
import { recipeMock as recipe } from "../../../utils/test-utils"

describe("RecipeCard component", () => {
  const wrapper = shallow(<RecipeCard {...recipe} />);

  it("renders all subcomponents", () => {
    expect(wrapper.find(RecipeHeader)).toHaveLength(1)
    expect(wrapper.find(RecipeDetail)).toHaveLength(1)
    expect(wrapper.find(Image)).toHaveLength(1)
    expect(wrapper.find(RecipeContent)).toHaveLength(1)
  })
})
