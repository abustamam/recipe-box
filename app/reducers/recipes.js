import { List, Map } from 'immutable'

const initialRecipes = Map({
  0: Map({
    id: 0,
    title: 'Pumpkin Pie',
    ingredients: List.of(
      'Pumpkin Puree',
      'Sweetened Condensed Milk',
      'Eggs',
      'Pumpkin Pie Spice',
      'Pie Crust'
    )
  }),
  1: Map({
    id: 1,
    title: 'Spaghetti',
    ingredients: List.of(
      'Noodles',
      'Tomato Sauce',
      '(Optional) Meatballs'
    )
  })
})

const recipe = (state, action) => {
  switch (action.type) {
  case 'ADD_RECIPE':
    return Map({
      id: action.id,
      title: action.title,
      ingredients: action.ingredients
    })
  default:
    return state
  }
}

const recipes = (state = initialRecipes, action) => {
  switch (action.type) {
  case 'ADD_RECIPE':
    return state.update(action.id, recipe(null, action))
  default:
    return state
  }
}

export default recipes
