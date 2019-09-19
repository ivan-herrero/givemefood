import { connect } from 'react-redux'

import { RootState } from '../reducers'
import App, { StateProps, DispatchProps } from '../components/App/App'
import { recipeSelector, showRecipeSelector } from '../selectors/recipe'
import { fetchRecipe } from '../actions/recipe'

const mapStateToProps = (state: RootState): StateProps => ({
  showRecipe: showRecipeSelector(state),
  recipe: recipeSelector(state)
})

const mapDispatchToProps: DispatchProps = {
  fetchRecipe
}

const AppContainer = connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
