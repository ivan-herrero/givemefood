import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

import RecipeHeader from './RecipeHeader/RecipeHeader'
import RecipeDetail from './RecipeDetail/RecipeDetail'
import RecipeContent from './RecipeContent/RecipeContent'
import { Recipe } from '../../reducers/recipeReducer'

export interface Props extends Recipe { }

const RecipeCard: React.FC<Props> = (props) => {
  return (
    <Grid columns={1}>

      <Grid.Column textAlign="center">
        <RecipeHeader {...props} />
      </Grid.Column>

      <Grid.Column textAlign="center">
        <RecipeDetail {...props} />
      </Grid.Column>

      <Grid stackable columns={2}>

        <Grid.Column width="4">
          <Image src={props.image} centered fluid className="recipe-image" />
        </Grid.Column>

        <Grid.Column width="12">
          <RecipeContent {...props} />
        </Grid.Column>

      </Grid>

    </Grid>
  )
}

export default RecipeCard
