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
      nutritionalValue={props.nutritionalValue}
      showIngredientsArea={props.showIngredientsArea}
      editingWeight={editingWeight}
      switchEditingWeight={switchEditingWeight}
      editIngredientAndCalculate={editIngredientAndCalculate}
      deleteIngredientAndCalculate={deleteIngredientAndCalculate}
      showEditingField={props.showEditingField}
   />
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    addedFood: state.recipeConstructorReducer.addedFood,
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
    showIngredientsArea: state.recipeConstructorReducer.ingredientsArea.showIngredientsArea,
    showEditingField: ownProps.showEditingField,
  })
}

export default connect(mapStateToProps, {editIngredient, deleteIngredient})(IngredientsTableContainer)