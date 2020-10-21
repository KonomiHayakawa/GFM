import React from 'react'
import FoodCategoriesListContainer from '../../foodCalories/FoodCategoriesList/FoodCategoriesListContainer'
import FoodCategoryContainer from '../../foodCalories/FoodCategory/FoodCategoryContainer'

const ChoosingIngredients = (props) => {

 return (
  <>
    {props.showModal && !props.openFoodCategory &&
      <FoodCategoriesListContainer addToRecipe={true}/>
    }
    {props.showModal && props.openFoodCategory && 
      <FoodCategoryContainer categoryLink={props.foodCategoryLink}/>
    }
  </>
 )
} 

export default ChoosingIngredients