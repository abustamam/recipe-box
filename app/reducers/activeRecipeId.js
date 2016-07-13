const initialActiveRecipeId = 0

const activeRecipeId = (state = initialActiveRecipeId, action) => {
  switch (action.type) {
  case 'OPEN_RECIPE':
    return action.id
  default:
    return state
  }
}

export default activeRecipeId
