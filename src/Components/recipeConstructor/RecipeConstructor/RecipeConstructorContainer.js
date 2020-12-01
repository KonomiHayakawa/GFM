import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {closeIngredientsArea, clearRecipe} from '../../../redux/recipeConstructorReducer'
import RecipeConstructor from './RecipeConstructor'

const RecipeConstructorContainer = (props) => {
  const [showInfo, switchShowInfo] = useState(false)

  const { clearRecipe } = props
  const { closeIngredientsArea } = props

  useEffect(() => {
    return () => {
      clearRecipe()
      closeIngredientsArea()
    }
}, [clearRecipe, closeIngredientsArea])


  return (
    <RecipeConstructor 
      {...props}
      showInfo={showInfo}
      switchShowInfo={switchShowInfo}
    />
  )
}

const mapStateToProps = (state) => ({
  ingredientsArea: state.recipeConstructorReducer.ingredientsArea
})

export default connect(mapStateToProps, {closeIngredientsArea, clearRecipe})(RecipeConstructorContainer)