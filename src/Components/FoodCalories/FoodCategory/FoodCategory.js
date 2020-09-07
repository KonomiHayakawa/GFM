import React from 'react'
import ChooseIngredientForm from '../../RecipeConstructor/ChooseIngredientForm'


const FoodCategory = (props) => {

  const table = props.foodData.map((foodstuff, index) => 

    <tr>
      <td>
        <img src={foodstuff.img} alt={foodstuff.title}/>
      </td>
      <td>
        {foodstuff.title}
      </td>
      <td>
        {foodstuff.proteins}
      </td>
      <td>
        {foodstuff.fats}</td>
      <td>
        {foodstuff.carbohydrates}
      </td>
      <td>
        {foodstuff.calories}
      </td>
      <td>
        {props.addRecipeButton && !props.weightFieldOpen &&
          <button onClick={() => props.changeWeightFieldOpen(index)}>Добавить</button>
        }
        {props.addRecipeButton && props.weightFieldOpen === index &&
            <span>
              <ChooseIngredientForm ingredientId={index} addIngredientToRecipe={props.addIngredientToRecipe}/>
            </span>
        }
      </td>
    </tr>
  )

  return (
    <div>
      <table>
        <tbody>
          {table}
        </tbody>
      </table>
      <div>
        pagination
      </div>
    </div>
  )
}

export default FoodCategory