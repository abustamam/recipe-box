import React from 'react'
import RecipeListContainer from '../containers/RecipeListContainer'
import RecipeInfoContainer from '../containers/RecipeInfoContainer'

const Main = () => (
  <div className="main">
    <RecipeListContainer />
    <RecipeInfoContainer />
  </div>
)

export default Main
