import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FoodCategory from './FoodCategory'
import {getFoodGroup} from '../../../queries/foodCalories'
import {setFoodCategoryItems} from './../../../redux/foodCaloriesReducer'
import {setOpenFoodCategory, setFoodCategoryLink} from './../../../redux/recipeConstructorReducer'
import {setError} from './../../../redux/forError'

const FoodCategoryContainer = (props) => {
  const [foodItems, setFoodItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  
  useEffect(() => {
    try {
      getFoodGroup(props.foodCategoryLink || props.match.params.category)
        .then((response) => {
          props.setFoodCategoryItems(response)
          setFoodItems(response)
        })
        .then(() => setIsLoading(false))
        
    } catch (error) {
      props.setError(error)
    }
  },[props.foodCategoryLink, props.match.params.category, props.setFoodCategoryItems,  props.setError])

  useEffect(() => {
    const filteredFoodItems = searchFoodItems()
    setFoodItems(filteredFoodItems)
  },[searchQuery])

  function searchFoodItems() {
    if (!searchQuery) return props.foodData

    return props.foodData.filter((foodItem) => {
      const requestLowerCase = searchQuery.toLowerCase()
      const titleLowerCase = foodItem.title.toLowerCase()
      return titleLowerCase.startsWith(requestLowerCase)
    })
  }

  const goBackToCategoriesList = () => {
    if (props.openFoodCategory) {
      props.setOpenFoodCategory(false)
      props.setFoodCategoryLink(null)
    } else {
      props.history.push('/foodCategoriesList')
    }
  }

  return (
    <FoodCategory
      error={props.error} 
      foodData={props.foodData} 
      goBackToCategoriesList={goBackToCategoriesList}
      isLoading={isLoading}
      foodItems={foodItems}
      setSearchQuery={setSearchQuery}
    />
  )
}

const mapStateToProps = (state) => ({
  foodCategoryLink: state.recipeConstructorReducer.ingredientsArea.foodCategoryLink,
  openFoodCategory: state.recipeConstructorReducer.ingredientsArea.openFoodCategory,
  foodData: state.foodCaloriesReducer.foodCategoryItems,
  error: state.forError.error,
})

export default withRouter(connect(mapStateToProps, {setFoodCategoryItems, setError, setOpenFoodCategory, setFoodCategoryLink})(FoodCategoryContainer))
