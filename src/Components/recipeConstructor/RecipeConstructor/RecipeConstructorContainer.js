import React from 'react'
import { connect } from 'react-redux'
import RecipeConstructor from './RecipeConstructor'
import {setOpenFoodCategory, setShowModal} from '../../../redux/recipeConstructorReducer'

const RecipeConstructorContainer = (props) => {

  return (
   <RecipeConstructor {...props} />
  )
}

const mapStateToProps = (state) => {
  return ({
    modalData: state.recipeConstructorReducer.modal,
  })
}

export default connect(mapStateToProps, {setOpenFoodCategory, setShowModal})(RecipeConstructorContainer)