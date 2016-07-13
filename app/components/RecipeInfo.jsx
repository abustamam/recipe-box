import React, { PropTypes } from 'react'

const RecipeInfo = ({ activeRecipe }) => {
  // console.log(recipes)
  return (<div className="recipe recipe-info">
    <div className="recipe-header">Ingredients</div>
    {activeRecipe.get('ingredients').map(ingredient => {
      return (<div key={ingredient}>{ingredient}</div>)
    })}
  </div>)
}

RecipeInfo.propTypes = {

}

export default RecipeInfo
