import React from 'react'
import Modal from '../../common/Modal';
import FoodCategoryContainer from '../../foodCalories/FoodCategory/FoodCategoryContainer'
import FoodCategoriesListContainer from '../../foodCalories/FoodCategoriesList/FoodCategoriesListContainer'

const ChoosingIngredientsModal = (props) => {
  return (
    <React.Fragment>
    { props.modalData.showModal && !props.modalData.openFoodCategory && (
      <Modal>
        <button onClick={() => props.setShowModal(false)}>close modal</button>
        <FoodCategoriesListContainer addToRecipe={true}/>
      </Modal> 
    )}
    { props.modalData.showModal && props.modalData.openFoodCategory && (
      <Modal>
        <button onClick={() => props.setOpenFoodCategory(false)}>back</button>
        <FoodCategoryContainer categoryLink={props.modalData.foodCategoryLink}/>
      </Modal> 
    )}
  </React.Fragment>
  )
}

export default ChoosingIngredientsModal