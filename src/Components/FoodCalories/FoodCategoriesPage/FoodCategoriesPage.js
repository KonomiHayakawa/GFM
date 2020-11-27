import React from 'react'
import classes from './FoodCategoriesPage.module.css'
import FoodCategoriesListContainer from '../FoodCategoriesList/FoodCategoriesListContainer'
import {ReactComponent as PageMainImage} from './../../../img/foodCategories/mainImage.svg'

const FoodCategoriesPage = (props) => {
  return (
    <div 
      className={classes.FoodCategoriesPageWrapper}
    >
      <FoodCategoriesListContainer/>
      <PageMainImage 
        className={classes.mainImage} 
      />
    </div>
  )
}

export default FoodCategoriesPage
