import { combineReducers } from 'redux'
import recipes from './recipes'
import activeRecipeId from './activeRecipeId'

const recipeApp = combineReducers({
  recipes,
  activeRecipeId
})

export default recipeApp
