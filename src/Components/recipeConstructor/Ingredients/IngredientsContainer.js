import React, { useState } from 'react'
import { connect } from 'react-redux'
import Ingredients from './Ingredients'
import {editIngredient, deleteIngredient, setShowModal} from '../../../redux/recipeConstructorReducer'
import {calcEditedIngredient, calcWithoutRemovedIngredient} from '../../common/calculations'

const IngredientsContainer = (props) => {

  const [editingWeight, switchEditingWeight] = useState(false)

  const editIngredientAndCalculate = (ingredient, newWeight) => {
    const editedIngredient = calcEditedIngredient(ingredient, newWeight, props.nutritionalValue)
    switchEditingWeight(false)
    return props.editIngredient(...editedIngredient)
  }

    const deleteIngredientAndCalculate = (ingredient) => {
    const newTotalData = calcWithoutRemovedIngredient(ingredient, props.nutritionalValue)
    return props.deleteIngredient(ingredient.title, ...newTotalData)
  }

  return (
   <Ingredients 
      {...props}
      editingWeight={editingWeight}
      switchEditingWeight={switchEditingWeight}
      editIngredientAndCalculate={editIngredientAndCalculate}
      deleteIngredientAndCalculate={deleteIngredientAndCalculate}
   />
  )
}

const mapStateToProps = (state) => {
  return ({
    constructorData: state.recipeConstructorReducer,
    stateTotalCalories: state.recipeConstructorReducer.nutritionalValue.totalCalories,
    stateTotalWeight: state.recipeConstructorReducer.nutritionalValue.totalWeight,
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
    modalData: state.recipeConstructorReducer.modalData
  })
}

export default connect(mapStateToProps, {editIngredient, deleteIngredient, setShowModal})(IngredientsContainer)