import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Icon from './Icon'

const RecipeInfo = ({ activeRecipe }) => {
  // console.log(recipes)
  return (<div className="recipe recipe-info">
    <div className="recipe-header"><span>Ingredients for {activeRecipe.get('title')}</span><Icon type="edit"/></div>
    <div>
      {activeRecipe.get('ingredients').map(ingredient => {
        return (<div key={ingredient}>{ingredient}</div>)
      })}
    </div>
  </div>)
}

RecipeInfo.propTypes = {
  activeRecipe: ImmutablePropTypes.map
}

export default RecipeInfo
