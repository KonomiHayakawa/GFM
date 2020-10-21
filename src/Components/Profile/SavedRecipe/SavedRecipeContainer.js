import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SavedRecipe from './SavedRecipe'
import {setRecipeData, clearRecipe, setShowModal, setOpenFoodCategory} from './../../../redux/recipeConstructorReducer'
import { withRouter } from 'react-router-dom'
import {getRecipe} from './../../../queries/recipeConstructor'
import {updateRecipes} from './../../../redux/userPersonalData'
import {saveUserRecipes, addRecipeImg, getRecipeImgLink} from '../../../queries/recipeConstructor'
import {setError} from './../../../redux/forError'

const SavedRecipeContainer = (props) => {

  const [openedRecipe, setOpenedRecipe] = useState({})
  const [editingRecipe, switchEditingRecipe] = useState(false)
  const [updatingRecipeImg, switchUpdatingRecipeImg] = useState(false)

  useEffect(() => {
    try {
      getRecipe(props.userId, props.match.params.category)
        .then(recipe => {
          setOpenedRecipe(recipe)
          props.setRecipeData(recipe.ingredients, recipe.calories, recipe.weight)
        })
    } catch (error) {
      props.setError(error)
    }
    return function cleanup() {
      setOpenedRecipe({})
      props.clearRecipe()
    }
  }, [props.savedRecipes])

  const updateRecipeImg = (formData) => {
    let updatedRecipes = []
    try {
      addRecipeImg(props.userId, formData.img, openedRecipe.id)
        .then(() => getRecipeImgLink(props.userId, openedRecipe.id))
        .then((link) => {
          updatedRecipes = props.savedRecipes.map((recipe) => {
            if(recipe.id === openedRecipe.id) {
              return ({
                ...recipe,
                img: link,
              })
            } else {
              return recipe
            }
          })
        })
        .then(() => props.updateRecipes(updatedRecipes)) 
        .then(() => saveUserRecipes(props.userId, updatedRecipes))
        .then(() => switchUpdatingRecipeImg(false))
    } catch (error) {
      props.setError(error)
    }
    
  }

  const updateRecipe = () => {
    const updatedRecipes = props.savedRecipes.map((recipe) => {
      if(recipe.id === openedRecipe.id) {
        return ({
          ...recipe,
          ingredients: props.addedFood,
          weight: props.nutritionalValue.totalWeight,
          calories: props.nutritionalValue.totalCalories
        })
      } else {
        return recipe
      }
    })
    try {
      props.updateRecipes(updatedRecipes)
      saveUserRecipes(props.userId, updatedRecipes)
        .then(() => switchEditingRecipe(false))
    } catch (error) {
      props.setError(error)
    }

}
  
  return (
    <SavedRecipe 
      {...props}
      recipe={openedRecipe}
      updateRecipe={updateRecipe}
      modalData={props.modalData}
      setShowModal={props.setShowModal}
      setOpenFoodCategory={props.setOpenFoodCategory}
      editingRecipe={editingRecipe}
      switchEditingRecipe={switchEditingRecipe}
      updatingRecipeImg={updatingRecipeImg} 
      switchUpdatingRecipeImg={switchUpdatingRecipeImg}
      updateRecipeImg={updateRecipeImg}
    />
  )
}

const mapStateToProps = (state) => ({
  userId: state.authReducer.userId,
  savedRecipes: state.userPersonalData.savedRecipes,
  addedFood: state.recipeConstructorReducer.addedFood,
  nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
  modalData: state.recipeConstructorReducer.modal,
  error: state.forError.error,
})

export default withRouter(connect(mapStateToProps, 
  {setRecipeData, 
    clearRecipe, 
    updateRecipes, 
    setShowModal, 
    setOpenFoodCategory,
    setError,
  })(SavedRecipeContainer))