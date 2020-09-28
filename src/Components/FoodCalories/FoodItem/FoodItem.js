import React from 'react'
import ChooseIngredientForm from '../../recipeConstructor/Ingredients/ChooseIngredientForm'

const FoodItem = (props) => {

  return (
    <tr>
      <td>
        <img src={props.foodItem.img} alt={props.foodItem.title}/>
      </td>
      <td>
        {props.foodItem.title}
      </td>
      <td>
        {props.foodItem.proteins}
      </td>
      <td>
        {props.foodItem.fats}
      </td>
      <td>
        {props.foodItem.carbohydrates}
      </td>
      <td>
        {props.foodItem.calories}
      </td>
      <td>
        {props.addRecipeButton && props.weightFieldOpen !== props.foodItem.id &&
          <button onClick={() => props.changeWeightFieldOpen(props.foodItem.id)}>Добавить</button>
        }
        {props.addRecipeButton && props.weightFieldOpen === props.foodItem.id &&
          <span>
            <ChooseIngredientForm 
              foodId={props.foodItem.id} 
              addIngredientToRecipe={props.addIngredientToRecipe}/>
          </span>
        }
      </td>
    </tr>
  )
}

export default FoodItem