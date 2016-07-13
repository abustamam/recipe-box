import React, { PropTypes } from 'react'
import Recipe from './Recipe'

const RecipeList = ({ recipes, onRecipeClick }) => {
  // console.log(recipes)
  return (<div className="recipe recipe-list">
    <div className="recipe-header">Recipes</div>
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
  // recipes: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  //   completed: PropTypes.bool.isRequired,
  //   text: PropTypes.string.isRequired
  // }).isRequired).isRequired,
  onRecipeClick: PropTypes.func.isRequired
}

export default RecipeList
