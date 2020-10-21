import React, { useState } from 'react'
import { connect } from 'react-redux'
import {setRecipe} from '../../../redux/userPersonalData'
import {clearRecipe} from '../../../redux/recipeConstructorReducer'
import {setError} from './../../../redux/forError'
import {saveUserRecipes, addRecipeImg, getRecipeImgLink} from '../../../queries/recipeConstructor'
import SavingRecipe from './SavingRecipe'
import { v4 as uuidv4 } from 'uuid'

const SavingRecipeContainer = (props) => {

  const [savingRecipe, switchSavingRecipe] = useState(false)

  const titles = props.savedRecipes.map(recipe => recipe.title)
  const recipeId = uuidv4()

  const saveNewRecipe = (recipe) => {
    if (titles.includes(recipe.title)) {
      switchSavingRecipe('errorSameTitle')
    } else if (!recipe.ingredients.length) {
        switchSavingRecipe('errorNoIngredients')
    } else {
      if (recipe.img.length === 0) {
        try {
          recipe = {...recipe, img: null, id: recipeId}
          props.setRecipe([recipe]) 
          saveUserRecipes(props.userId, [...props.savedRecipes, recipe])
        } catch (error) {
          props.setError(error)
        }
      } else {
        try {
          addRecipeImg(props.userId, recipe.img, recipeId)
            .then(() => getRecipeImgLink(props.userId, recipeId))
            .then((link) => recipe = {...recipe, img: link, id: recipeId})
            .then(() => props.setRecipe([recipe])) 
            .then(() => saveUserRecipes(props.userId, [...props.savedRecipes, recipe]))
        } catch (error) {
          props.setError(error)
        }
      }
      switchSavingRecipe(false)
      props.clearRecipe()
      switchSavingRecipe('done')
    }
  }

  return (
   <SavingRecipe 
      {...props} 
      savingRecipe={savingRecipe}
      switchSavingRecipe={switchSavingRecipe}
      saveRecipe={saveNewRecipe}
    />
  )
}

const mapStateToProps = (state) => {
  return ({
    addedFood: state.recipeConstructorReducer.addedFood,
    stateTotalCalories: state.recipeConstructorReducer.nutritionalValue.totalCalories,
    stateTotalWeight: state.recipeConstructorReducer.nutritionalValue.totalWeight,
    userId: state.authReducer.userId,
    savedRecipes: state.userPersonalData.savedRecipes,
    isAuth: state.authReducer.isAuth,
    error: state.forError.error
  })
}

export default connect(mapStateToProps, {setRecipe, clearRecipe, setError})(SavingRecipeContainer)