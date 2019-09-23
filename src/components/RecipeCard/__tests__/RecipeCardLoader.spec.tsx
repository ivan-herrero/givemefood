import React from 'react'
import { shallow } from 'enzyme'

import RecipeCardLoader from '../RecipeCardLoader/RecipeCardLoader'

describe("RecipeCardLoader component", () => {

  it("renders", () => {
    shallow(<RecipeCardLoader />);
  })
})
