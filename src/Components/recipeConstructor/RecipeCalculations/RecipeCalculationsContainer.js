import React, { useState } from 'react'
import { connect } from 'react-redux'
import RecipeCalculations from './RecipeCalculations'


const RecipeCalculationsContainer = (props) => {

  const [showInfo, toggleShowInfo] = useState(false)

  return <RecipeCalculations 
    {...props} 
    showInfo={showInfo}
    toggleShowInfo={toggleShowInfo}
  />
}

const mapStateToProps = (state) => {
  return ({
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
  })
}

export default connect(mapStateToProps, {})(RecipeCalculationsContainer)