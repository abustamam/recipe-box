import { connect } from 'react-redux'
import RecipeInfo from '../components/RecipeInfo'
import _ from 'lodash'

const mapStateToProps = state => {
  const activeRecipeId = _.toString(state.activeRecipeId)
  const activeRecipe = state.recipes.get(activeRecipeId)
  return {
    activeRecipe
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const RecipeInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeInfo)

export default RecipeInfoContainer
