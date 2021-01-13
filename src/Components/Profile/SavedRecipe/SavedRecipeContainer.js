import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../../../queries/recipeConstructor'
import SavedRecipe from './SavedRecipe'
import { setRecipeData, clearRecipe, setShowIngredientsArea, closeIngredientsArea } from '../../../redux/recipeConstructorReducer'
import { saveUserRecipes, addRecipeImg, getRecipeImgLink } from '../../../queries/recipeConstructor'
import { setError } from '../../../redux/forError'
import { updateRecipes } from '../../../redux/userPersonalData'
import { withRouter } from 'react-router-dom'

const SavedRecipeContainer = (props) => {
  const [openedRecipe, setOpenedRecipe] = useState({})
  const [editingRecipe, switchEditingRecipe] = useState(false)
  const [updatingRecipeImg, setUpdatingRecipeImg] = useState(false)

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
      props.closeIngredientsArea()
    }
  }, [props.savedRecipes, props.setRecipeData, props.setError, props.clearRecipe])

  const updateRecipeImg = () => {
    let updatedRecipes = []
    try {
      addRecipeImg(props.userId, updatingRecipeImg, openedRecipe.id)
        .then(() => getRecipeImgLink(props.userId, openedRecipe.id))
        .then((link) => {
          updatedRecipes = props.savedRecipes.map(recipe => {
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
        .then(() => setUpdatingRecipeImg(false))
    } catch (error) {
      props.setError(error)
    }
    
  }

  const updateRecipe = () => {
    const updatedRecipes = props.savedRecipes.map(recipe => {
      if (recipe.id === openedRecipe.id) {
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
        .then(() => props.setShowIngredientsArea(false))
    } catch (error) {
      props.setError(error)
    }
  }

  const goToRecipesList = () => {
    props.history.push('/profile/myRecipes')
  }
  
  return (
    <SavedRecipe 
      editingRecipe={editingRecipe}
      error={props.error}
      goToRecipesList={goToRecipesList}
      ingredientsArea={props.ingredientsArea}
      recipe={openedRecipe}
      setUpdatingRecipeImg={setUpdatingRecipeImg}
      switchEditingRecipe={switchEditingRecipe}
      updatingRecipeImg={updatingRecipeImg} 
      updateRecipeImg={updateRecipeImg}
      updateRecipe={updateRecipe}
    />
  )
}

const mapStateToProps = (state) => ({
  addedFood: state.recipeConstructorReducer.addedFood,
  error: state.forError.error,
  ingredientsArea: state.recipeConstructorReducer.ingredientsArea,
  nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
  savedRecipes: state.userPersonalData.savedRecipes,
  userId: state.authReducer.userId,
})

export default withRouter(connect(mapStateToProps, 
  { setRecipeData, 
    clearRecipe, 
    closeIngredientsArea,
    updateRecipes, 
    setShowIngredientsArea,
    setError,
  })(SavedRecipeContainer))