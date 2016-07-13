import React from 'react'
import AddTodo from '../containers/AddTodo'
import RecipeListContainer from '../containers/RecipeListContainer'
import FilterLinks from './FilterLinks'

const Main = () => (
  <div className="main">
  {/*
    <AddTodo />
    <VisibleTodoList />
    <FilterLinks />
  */}
    <RecipeListContainer />
  </div>
)

export default Main
