import React from 'react'
import { connect } from 'react-redux'
import {deleteRecipeImg, saveUserRecipes} from './../../../queries/recipeConstructor'
import MyRecipes from './MyRecipes'
import {setError} from './../../../redux/forError'
import {updateRecipes} from './../../../redux/userPersonalData'

const MyRecipesContainer = (props) => {
  const deleteRecipe = (recipe) => {
    const updatedRecipes = props.savedRecipes.filter(savedRecipe => savedRecipe.id !== recipe.id)
    props.updateRecipes(updatedRecipes)
    try {
      saveUserRecipes(props.userId, updatedRecipes)
        .then(() => {
          if (recipe.img) {
            deleteRecipeImg(props.userId, recipe.id)
          }
        })
    } catch (error) {
      props.setError(error)
    }
  }

  return (
    <MyRecipes 
      deleteRecipe={deleteRecipe}
      error={props.error}
      savedRecipes={props.savedRecipes}
    />
  )
}

const mapStateToProps = (state) => ({
  error: state.forError.error,
  userId: state.authReducer.userId,
  savedRecipes: state.userPersonalData.savedRecipes,
})

export default connect(mapStateToProps, {updateRecipes, setError})(MyRecipesContainer)