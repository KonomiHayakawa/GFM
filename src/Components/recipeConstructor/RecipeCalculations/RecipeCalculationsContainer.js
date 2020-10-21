import React from 'react'
import { connect } from 'react-redux'
import RecipeCalculations from './RecipeCalculations'


const RecipeCalculationsContainer = (props) => {
  return <RecipeCalculations {...props} />
}

const mapStateToProps = (state) => {
  return ({
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
  })
}

export default connect(mapStateToProps, {})(RecipeCalculationsContainer)