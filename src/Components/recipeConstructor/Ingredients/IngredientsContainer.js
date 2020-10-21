import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Ingredients from './Ingredients'
import {editIngredient, deleteIngredient, setShowModal, closeModal} from '../../../redux/recipeConstructorReducer'
import {calcEditedIngredient, calcWithoutRemovedIngredient} from '../../common/calculations'

const IngredientsContainer = (props) => {

  const [editingWeight, switchEditingWeight] = useState(false)

  const editIngredientAndCalculate = (ingredient, newWeight) => {
    const editedIngredient = calcEditedIngredient(ingredient, newWeight, props.nutritionalValue)
    switchEditingWeight(false)
    props.editIngredient(...editedIngredient)
  }

  const deleteIngredientAndCalculate = (ingredient) => {
    const newTotalData = calcWithoutRemovedIngredient(ingredient, props.nutritionalValue)
    props.deleteIngredient(ingredient.id, ...newTotalData)
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
    showModal: state.recipeConstructorReducer.modal.showModal,
  })
}

export default connect(mapStateToProps, {editIngredient, deleteIngredient, setShowModal, closeModal})(IngredientsContainer)