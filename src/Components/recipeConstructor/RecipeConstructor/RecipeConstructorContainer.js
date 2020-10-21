import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import RecipeConstructor from './RecipeConstructor'
import {closeModal, clearRecipe} from '../../../redux/recipeConstructorReducer'

const RecipeConstructorContainer = (props) => {

  const [showInfo, switchShowInfo] = useState(false)

  useEffect(() => {
    return () => {props.clearRecipe(); props.closeModal()}
  }, [])

  return (
    <RecipeConstructor 
      {...props}
      showInfo={showInfo}
      switchShowInfo={switchShowInfo}
    />
  )
}

const mapStateToProps = (state) => {
  return ({
    modalData: state.recipeConstructorReducer.modal,
  })
}

export default connect(mapStateToProps, {closeModal, clearRecipe})(RecipeConstructorContainer)