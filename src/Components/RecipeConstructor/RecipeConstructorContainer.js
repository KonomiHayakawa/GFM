import React, { useState } from 'react'
import { connect } from 'react-redux'
import RecipeConstructor from './RecipeConstructor'
import {setRecipe} from './../../redux/userPersonalData'
import {setShowModal, deleteIngredient, editIngredient} from './../../redux/recipeConstructorReducer'
import {calcEditedIngredient, calcWithoutRemovedIngredient} from './../common/calculations'
import {saveRecipe} from './../../queries/queries'

const RecipeConstructorContainer = (props) => {
console.log(props.savedRecipes)
  const [editingWeight, switchEditingWeight] = useState(false)
  const [savingRecipe, switchSavingRecipe] = useState(false)

  const editIngredientAndCalculate = (ingredient, newWeight) => {
    const editedIngredient = calcEditedIngredient(ingredient, newWeight, props.stateTotalCalories, props.stateTotalWeight)
    switchEditingWeight(false)
    return props.editIngredient(...editedIngredient)
  }

  const deleteIngredientAndCalculate = (ingredient) => {
    const newTotalData = calcWithoutRemovedIngredient(ingredient, props.stateTotalCalories, props.stateTotalWeight)
    return props.deleteIngredient(ingredient.title, ...newTotalData)
  }

  const saveNewRecipe = (recipe) => {
    saveRecipe(props.userId, recipe)
      .then(() => props.setRecipe(recipe))
  }

  return (
   <RecipeConstructor 
    {...props} 
    deleteIngredientAndCalculate={deleteIngredientAndCalculate}
    editIngredientAndCalculate={editIngredientAndCalculate}
    editingWeight={editingWeight}
    switchEditingWeight={switchEditingWeight}
    savingRecipe={savingRecipe}
    switchSavingRecipe={switchSavingRecipe}
    saveRecipe={saveNewRecipe}/>
  )
}

const mapStateToProps = (state) => {
  return ({
    modalData: state.recipeConstructorReducer.modal,
    constructorData: state.recipeConstructorReducer,
    stateTotalCalories: state.recipeConstructorReducer.totalCalories,
    stateTotalWeight: state.recipeConstructorReducer.totalWeight,
    userId: state.authReducer.userId,
    savedRecipes: state.userPersonalData.savedRecipes,
  })
}

export default connect(mapStateToProps, {setShowModal, deleteIngredient, editIngredient, setRecipe})(RecipeConstructorContainer)