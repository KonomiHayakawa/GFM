import React from 'react'
import classes from './FoodCategoryPage.module.css'
import FoodCategoryContainer from './../FoodCategory/FoodCategoryContainer'
import {ReactComponent as PageMainImage} from './../../../img/foodCategories/foodCategory/mainImage.svg';

const FoodCategoryPage = (props) => {
  return (
    <div className={classes.wrapper}>
      <FoodCategoryContainer className={classes.foodCategory}/>
      <PageMainImage className={classes.mainImage}/>
    </div>
  )
}

export default FoodCategoryPage