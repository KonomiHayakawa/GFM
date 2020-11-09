import React from 'react'
import { connect } from 'react-redux'
import Ingredients from './Ingredients'
import {setShowModal, closeModal} from '../../../redux/recipeConstructorReducer'

const IngredientsContainer = (props) => {

  return (
    <Ingredients 
      {...props}
    />
  )
}

const mapStateToProps = (state) => {
  return ({
    addedFood: state.recipeConstructorReducer.addedFood,
    showModal: state.recipeConstructorReducer.modal.showModal,
  })
}

export default connect(mapStateToProps, {setShowModal, closeModal})(IngredientsContainer)