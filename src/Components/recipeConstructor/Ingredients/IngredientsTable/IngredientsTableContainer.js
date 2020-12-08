import React, { useState } from 'react'
import { connect } from 'react-redux'
import {editIngredient, deleteIngredient} from '../../../../redux/recipeConstructorReducer'
import {calcEditedIngredient, calcWithoutRemovedIngredient} from '../../../common/calculations'
import IngredientsTable from './IngredientsTable'

import {removeIngredientLocalStorage, editIngredientLocalStorage} from './../../../common/localStorage'

const IngredientsTableContainer = (props) => {
  const [editingWeight, switchEditingWeight] = useState(false)

  const editIngredientAndCalculate = (ingredient, newWeight) => {
    const editedIngredient = calcEditedIngredient(ingredient, newWeight, props.nutritionalValue)
    switchEditingWeight(false)
    props.editIngredient(...editedIngredient)
    if (props.addToLocalStorage) {
      editIngredientLocalStorage(editedIngredient[0], editedIngredient[1], editedIngredient[2])
    }
  }

  const deleteIngredientAndCalculate = (ingredient) => {
    const newTotalData = calcWithoutRemovedIngredient(ingredient, props.nutritionalValue)
    props.deleteIngredient(ingredient.id, ...newTotalData)
    if (props.addToLocalStorage) {
      removeIngredientLocalStorage(ingredient.id, newTotalData[0], newTotalData[1])
    }
  }

  return (
   <IngredientsTable
      addedFood={props.addedFood}
      deleteIngredientAndCalculate={deleteIngredientAndCalculate}
      editingWeight={editingWeight}
      editIngredientAndCalculate={editIngredientAndCalculate}
      nutritionalValue={props.nutritionalValue}
      showIngredientsArea={props.showIngredientsArea}
      switchEditingWeight={switchEditingWeight}
      showEditingField={props.showEditingField}
   />
  )
}

const mapStateToProps = (state, ownProps) => ({
  addedFood: state.recipeConstructorReducer.addedFood,
  nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
  showIngredientsArea: state.recipeConstructorReducer.ingredientsArea.showIngredientsArea,
  showEditingField: ownProps.showEditingField,
})

export default connect(mapStateToProps, {editIngredient, deleteIngredient})(IngredientsTableContainer)