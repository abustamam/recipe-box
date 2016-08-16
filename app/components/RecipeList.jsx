import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Recipe from './Recipe'
import Icon from './Icon'

const RecipeList = ({ recipes, onRecipeClick }) => {
  // console.log(recipes)
  return (<div className="recipe recipe-list">
    <div className="recipe-header"><span>Recipes</span><Icon type="add" style={{ width: 16, height: 16 }}/></div>
    <div>
      {recipes.map(recipe => <Recipe
          key={recipe.get('id')}
          ingredients={recipe.get('ingredients')}
          title={recipe.get('title')}
          onClick={() => onRecipeClick(recipe.get('id'))}
        />
      )}
    </div>
  </div>)
}

RecipeList.propTypes = {
  recipes: ImmutablePropTypes.contains({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onRecipeClick: PropTypes.func.isRequired
}

export default RecipeList
