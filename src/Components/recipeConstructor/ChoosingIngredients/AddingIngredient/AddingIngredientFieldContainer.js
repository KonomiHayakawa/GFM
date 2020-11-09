import React, {useCallback, useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {setError} from '../../../../redux/forError'
import {setSelectedIngredient} from './../../../../redux/foodCaloriesReducer'
import AddingIngredientField from './AddingIngredientField'

const AddingIngredientFieldContainer = (props) => {
  const [addedFoodId, setAddedFoodId] = useState([])

  useEffect(() => {
    setAddedFoodId(props.addedFood.map(item => item.id))
  },[props.foodItem])

  const addIngredientToRecipe = useCallback((formData) => {
    props.setSelectedIngredient(formData, 'addIngredientToRecipe')
    setAddedFoodId([...addedFoodId, formData.ingredientId])
  },[props.setSelectedIngredient])

  const cancelAddingIngredient = (ingredientId) => {
    props.setSelectedIngredient({ingredientId}, 'cancelAddingIngredient')
    setAddedFoodId(addedFoodId.filter(id => id !== ingredientId))
  }

  return <AddingIngredientField 
    addRecipeButton={props.addRecipeButton}
    foodItem={props.foodItem}
    addIngredientToRecipe={addIngredientToRecipe}
    cancelAddingIngredient={cancelAddingIngredient}
    addedId={addedFoodId}
  />
}

const mapStateToProps = (state, ownProps) => {
  return ({
    addRecipeButton: ownProps.addRecipeButton,
    foodItem:ownProps.foodItem,
    addedFood: state.recipeConstructorReducer.addedFood
  })
}

export default connect(mapStateToProps, {setSelectedIngredient, setError,})(AddingIngredientFieldContainer)