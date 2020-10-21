import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import AddingIngredientField from './AddingIngredientField'
import {getIngredient} from '../../../../queries/recipeConstructor'
import {calculateIngredientCalories, calcWithoutRemovedIngredient} from '../../../common/calculations'
import {addIngredient, deleteIngredient} from '../../../../redux/recipeConstructorReducer'
import {setError} from '../../../../redux/forError'

const AddingIngredientFieldContainer = (props) => {

  const [addedId, setAddedId] = useState([])

  const addIngredientToRecipe = (formData) => {
    try {
      getIngredient(props.foodCategoryLink, formData.ingredientId)
        .then(foodItem => calculateIngredientCalories(foodItem, formData.weight, props.nutritionalValue))
        .then(data => props.addIngredient(...data))
      setAddedId(formData.ingredientId)
    } catch (error) {
      props.setError(error)
    }  
  }

  const cancelAddingIngredient = (foodItemId) => {
    const addedIngredient = props.addedFood.find(ingredient => ingredient.id === foodItemId)
    const newTotalData = calcWithoutRemovedIngredient(addedIngredient, props.nutritionalValue)
    props.deleteIngredient(foodItemId, ...newTotalData)
    setAddedId(addedId.filter(id => id !== foodItemId))
  }

  useEffect(() => {
    setAddedId(props.addedFood.map(ingredient => ingredient.id))
  }, [props])

  return <AddingIngredientField 
    addRecipeButton={props.addRecipeButton}
    foodItem={props.foodItem}
    addIngredientToRecipe={addIngredientToRecipe}
    cancelAddingIngredient={cancelAddingIngredient}
    addedId={addedId}
    cancelAddingIngredient={cancelAddingIngredient}
  />

}

const mapStateToProps = (state, ownProps) => {
  return ({
    foodCategoryLink: state.recipeConstructorReducer.modal.foodCategoryLink,
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
    addedFood: state.recipeConstructorReducer.addedFood,
    addRecipeButton: ownProps.addRecipeButton,
    foodItem: ownProps.foodItem,
  })
}

export default connect(mapStateToProps,{addIngredient, setError, deleteIngredient})(AddingIngredientFieldContainer)