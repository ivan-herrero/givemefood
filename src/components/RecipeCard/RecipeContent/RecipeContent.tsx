import React, { Fragment } from 'react'
import { Header, List } from 'semantic-ui-react'
import { Set } from 'immutable'

import { Ingredient, Instruction } from '../../../reducers/recipeReducer'

interface Props {
  ingredients: Set<Ingredient>
  instructions: Set<Instruction>
}

const renderInstructions = (instructions: Set<Instruction>) => instructions.map(i => <List.Item key={i.step}>{i.description}</List.Item>)

const renderIngredients = (ingredients: Set<Ingredient>) => ingredients.map(i => <List.Item key={i.id}>{i.name}</List.Item>)

const RecipeContent: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Header size="medium">Preparation</Header>
      <div>
        <List ordered>
          {renderInstructions(props.instructions)}
        </List>
      </div>
      <Header size="medium">Ingredients</Header>
      <div>
        <List bulleted>
          {renderIngredients(props.ingredients)}
        </List>
      </div>
    </Fragment>
  )
}

export default RecipeContent;
