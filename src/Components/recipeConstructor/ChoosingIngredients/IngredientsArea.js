import React from 'react'
import FoodCategoriesListContainer from '../../foodCalories/FoodCategoriesList/FoodCategoriesListContainer'
import FoodCategoryContainer from '../../foodCalories/FoodCategory/FoodCategoryContainer'

const IngredientsArea = (props) => {
 return (
    <>
      {props.showIngredientsArea && !props.openFoodCategory &&
        <FoodCategoriesListContainer 
          isForRecipeConstructor={true}
        />
      }
      {props.showIngredientsArea && props.openFoodCategory && 
        <FoodCategoryContainer 
          categoryLink={props.foodCategoryLink} 
        />
      }
    </>
 )
} 

export default IngredientsArea