import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './FoodCategoriesList.module.css'
import ErrorMessage from '../../common/ErrorMessage'


const FoodCategoriesList = (props) => {
  return (
    <div className={classes.categoriesWrapper}>
      {props.categories.map((category) => <FoodCategoryItem key={category.id} {...props} category={category}/>)}
      {props.error && <ErrorMessage />}
    </div>
  )
}

const FoodCategoryItem = (props) => {
  return (
    <React.Fragment>
      {props.addToRecipe
        ? <div className={classes.categoryWrapper} onClick={() => props.openFoodCategoryInModal(true, `${props.category.linkTo}`)}>          
            <img 
              className={classes.categoryImg} 
              src={require(`./../../../img/foodCategories/${props.category.linkTo}.svg`)} 
              alt={props.category.name} 
            />
            {props.category.name}
          </div>
        : <NavLink to={`foodGroup/${props.category.linkTo}`}>
            <div className={classes.categoryWrapper}>
              <img 
                className={classes.categoryImg} 
                src={require(`./../../../img/foodCategories/${props.category.linkTo}.svg`)} 
                alt={props.category.name} 
              />
              {props.category.name}
            </div>
          </NavLink>
      }
    </React.Fragment>
  )
}

export default FoodCategoriesList
