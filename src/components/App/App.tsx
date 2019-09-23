import React from 'react'
import { Header, Button, Grid } from 'semantic-ui-react'

import './App.css'
import RecipeCard from '../RecipeCard/RecipeCard'
import { Recipe } from '../../reducers/recipeReducer'
import RecipeCardLoader from '../RecipeCard/RecipeCardLoader/RecipeCardLoader'

export interface StateProps {
  showRecipe: boolean
  recipe?: Recipe
  error: boolean
}

export interface DispatchProps {
  fetchRecipe: () => void
}

export interface Props extends StateProps, DispatchProps { }

const App: React.FC<Props> = (props) =>
  <Grid container columns={1} verticalAlign='middle' className="app-container">
    {!props.showRecipe && !props.error &&
      <Grid.Column textAlign='center'>
        <Header>
          To get a random recipe click on the button!
        </Header>
        <Button onClick={props.fetchRecipe}>
          Get a random recipe
        </Button>
      </Grid.Column>
    }
    {props.showRecipe && !props.recipe && !props.error &&
      <Grid.Column>
        <RecipeCardLoader />
      </Grid.Column>
    }
    {props.showRecipe && props.recipe && !props.error &&
      <Grid.Column>
        <RecipeCard {...props.recipe} />
        <div className="tryagain-container">
          <Button onClick={props.fetchRecipe}>
            Try again!
          </Button>
        </div>
      </Grid.Column>
    }
    {props.error &&
      <Grid.Column textAlign="center">
        <div className="error-container">
          Oops! Something went wrong ¯\_(ツ)_/¯
        </div>
        <div className="tryagain-container">
          <Button onClick={props.fetchRecipe}>
            Try again!
          </Button>
        </div>
      </Grid.Column>
    }
  </Grid>

export default App
