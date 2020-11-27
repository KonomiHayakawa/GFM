import React from 'react'
import { Spin } from 'antd'
import classes from './FoodCategory.module.css'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'
import FoodCategoryTableContainer from '../FoodCategoryTable/FoodCategoryTableContainer'
import {SearchInput, NoSearchResults} from '../../common/Search/Search'
import BackArrow from './../../common/BackArrow/BackArrow'

const FoodCategory = (props) => {

  return (
    <div className={classes.wrapper}>

      <div className={classes.backAndSearchField}>
        <BackArrow 
          clickAction={props.goBackToCategoriesList}
        />
 
        <SearchInput 
          placeholder='Введи название продукта' 
          onChange={(e) => props.searchIngredient(e)} 
        />
      </div>

      <div className={classes.foodDataWrapper}>
        {props.isLoading 
          ? <div className={classes.spinner}>
              <Spin size='large'/>
            </div>
          : <>
              {props.searchMatches.length !== 0 && props.searchMatches !== 'none' &&
                <FoodCategoryTableContainer foodData={props.searchMatches}/>
              }
              {props.searchMatches.length === 0 && 
                <FoodCategoryTableContainer foodData={props.foodData}/>
              }
              {props.searchMatches === 'none' && 
                <NoSearchResults/>
              }
            </>
        }
      </div>
    
      {props.error && <ErrorMessage />}
    </div>
  )
}

export default FoodCategory






