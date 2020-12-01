import React from 'react'
import { connect } from 'react-redux'
import Ingredients from './Ingredients'
import {setShowIngredientsArea, closeIngredientsArea} from '../../../redux/recipeConstructorReducer'

const IngredientsContainer = (props) => {
  return (
    <Ingredients 
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  addedFood: state.recipeConstructorReducer.addedFood,
  showIngredientsArea: state.recipeConstructorReducer.ingredientsArea.showIngredientsArea,
})

export default connect(mapStateToProps, {setShowIngredientsArea, closeIngredientsArea})(IngredientsContainer)