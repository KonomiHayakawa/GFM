import React from 'react'
import { connect } from 'react-redux'
import {updateRecipes} from './../../../redux/userPersonalData'
import {deleteRecipeImg, saveUserRecipes, getDefaultImgLink} from './../../../queries/recipeConstructor'
import MyRecipes from './MyRecipes'
import {setError} from './../../../redux/forError'


const MyRecipesContainer = (props) => {

  const deleteRecipe = (recipe) => {
    const updatedRecipes = props.savedRecipes.filter(recip => recip.id !== recipe.id)
    props.updateRecipes(updatedRecipes)
    saveUserRecipes(props.userId, updatedRecipes)
    // deleteRecipe(props.userId, recipe.id)
    .then(() => {
      getDefaultImgLink()
      .then((defaultImg) => {
        if (recipe.img !== defaultImg) {
          deleteRecipeImg(props.userId, recipe.id)
        } else {
          console.log('done')
        }
      })
    })
    .catch((error) => props.setError(error))
  }

  return (
    <MyRecipes 
      {...props}
      deleteRecipe={deleteRecipe}
    />
  )
}

const mapStateToProps = (state) => ({
  savedRecipes: state.userPersonalData.savedRecipes,
  userId: state.authReducer.userId,
  errorMessage: state.forError.errorMessage
})

export default connect(mapStateToProps, {updateRecipes, setError})(MyRecipesContainer)