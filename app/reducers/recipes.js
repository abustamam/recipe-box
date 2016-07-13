import { List, Map } from 'immutable'

const initialRecipes = List([
  Map({
    id: 0,
    title: 'Pumpkin Pie',
    ingredients: List.of(
      'Pumpkin Puree',
      'Sweetened Condensed Milk',
      'Eggs',
      'Pumpkin Pie Spice',
      'Pie Crust'
    )
  })
])

const recipe = (state, action) => {
  switch (action.type) {
  case 'ADD_RECIPE':
    return Map({
      id: action.id,
      title: action.title,
      ingredients: action.ingredients
    })
  case 'OPEN_RECIPE':
    console.log(state)
    return state
  default:
    return state
  }
}

const recipes = (state = initialRecipes, action) => {
  switch (action.type) {
  case 'ADD_RECIPE':
    return state.push(recipe(null, action))
  default:
    return state
  }
}

export default recipes
