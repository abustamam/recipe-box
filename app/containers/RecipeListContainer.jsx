import { connect } from 'react-redux'
import { openRecipe } from '../actions'
import RecipeList from '../components/RecipeList'

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRecipeClick: id => {
      dispatch(openRecipe(id))
    }
  }
}

const RecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList)

export default RecipeListContainer
