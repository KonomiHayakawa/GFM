import React, { useState } from 'react'
import { connect } from 'react-redux'
import {editIngredient, deleteIngredient} from '../../../../redux/recipeConstructorReducer'
import {calcEditedIngredient, calcWithoutRemovedIngredient} from '../../../common/calculations'
import IngredientsTable from './IngredientsTable'

const IngredientsTableContainer = (props) => {
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