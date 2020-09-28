import React from 'react'
import ErrorMessage from '../../common/ErrorMessage'
import FoodItemContainer from './../FoodItem/FoodItemContainer'

const FoodCategory = (props) => {
  
  const suggestions = props.searchMatches.map((suggestion) => {
    return <FoodItemContainer foodItem={suggestion}/>
  })

  return (
    <div>
      <input type='text' placeholder='name' onChange={(e) => props.searchIngredient(e)} />
 
      <table>
        <tbody>
          {suggestions}
          {props.searchMatches.length === 0 && 
            props.foodData.map((foodstuff) => <FoodItemContainer foodItem={foodstuff}/>)
          }
        </tbody>
      </table>
      {props.errorMessage && <ErrorMessage />}
    </div>
  )
}

export default FoodCategory