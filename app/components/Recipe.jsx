import React, { PropTypes } from 'react'

const Recipe = ({ onClick, title, ingredients }) => {
  return (<li
    onClick={onClick}
  >
    {title}
  </li>
)}

Recipe.propTypes = {
  onClick: PropTypes.func.isRequired
  // completed: PropTypes.bool.isRequired,
  // text: PropTypes.string.isRequired
}

export default Recipe
