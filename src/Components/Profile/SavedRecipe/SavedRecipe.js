import React from 'react'
import classes from './SavedRecipe.module.css'
import './../../../App.css'
import BackArrow from './../../common/BackArrow/BackArrow'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'
import IngredientsArea from './../../recipeConstructor/choosingIngredients/IngredientsArea'
import {ReactComponent as PageMainImage} from './../../../img/profile/savedRecipeMainImage.svg'
import RecipeCard from './RecipeCard/RecipeCard'

const SavedRecipe = (props) => {
  return (
    <div>
      <BackArrow clickAction={props.goToRecipesList}/> 

      <div className={classes.wrapper}>
        <RecipeCard {...props}/>
      
        {props.ingredientsArea.showIngredientsArea && props.editingRecipe ? (
          <IngredientsArea {...props.ingredientsArea}/>
        ) : (
          <PageMainImage/>
        )}
      </div>

      {props.error && <ErrorMessage />}
    </div>
  )
}

export default SavedRecipe