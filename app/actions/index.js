import uuid from 'node-uuid'

export const addRecipe = ({ title, ingredients }) => {
  return {
    type: 'ADD_RECIPE',
    id: uuid.v4(),
    title,
    ingredients
  }
}

export const openRecipe = id => {
  return {
    type: 'OPEN_RECIPE',
    id
  }
}
