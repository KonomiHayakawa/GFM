import React, {useCallback, useEffect, useState} from 'react'
import { connect } from 'react-redux'
import AddingIngredientField from './AddingIngredientField'
import {setError} from '../../../../redux/forError'
import {setSelectedIngredient} from '../../../../redux/foodCaloriesReducer'

const AddingIngredientFieldContainer = (props) => {

  const [addedFoodId, setAddedFoodId] = useState([])
  const [isMobileModalOpened, setMobileModalOpened] = useState(false)

  useEffect(() => {
    setAddedFoodId(props.addedFood.map(item => item.id))
  },[props.foodItem, props.addedFood])

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
    addIngredientToRecipe={addIngredientToRecipe}
    addedId={addedFoodId}
    cancelAddingIngredient={cancelAddingIngredient}
    foodItem={props.foodItem}
    isMobileModalOpened={isMobileModalOpened}
    setMobileModalOpened={setMobileModalOpened}
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