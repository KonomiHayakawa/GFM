import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './FoodCategoriesList.module.css'
import ErrorMessage from '../../common/ErrorMessage'

const FoodCategoriesList = (props) => {
  return (
    <div>
      <div>
        {props.categories.map((category) => <FoodCategoryItem {...props} category={category}/>)}
      </div>
      {props.errorMessage && <ErrorMessage />}
    </div>
  )
}

const FoodCategoryItem = (props) => {
  return (
    <React.Fragment>
      {props.addToRecipe
      ? <div>          
          <a onClick={() => props.openFoodCategoryInModal(true, `${props.category.linkTo}`)}>
          <img className={classes.categoryImg} src={require(`./../../../img/foodCategories/${props.category.linkTo}.svg`)} alt={props.category.name} />
            {props.category.name}
          </a>
        </div>
      : <div>
          <NavLink to={`foodGroup/${props.category.linkTo}`}>
          <img className={classes.categoryImg} src={require(`./../../../img/foodCategories/${props.category.linkTo}.svg`)} alt={props.category.name} />
            {props.category.name}
          </NavLink>
        </div>
      }
    </React.Fragment>
  )
}

export default FoodCategoriesList
