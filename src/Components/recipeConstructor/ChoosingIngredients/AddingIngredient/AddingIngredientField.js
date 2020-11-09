 import React from 'react'
 import AddingIngredientForm from './AddingIngredientForm'
 import classes from './AddingIngredient.module.css'
 import './../../../../App.css'
 
const AddingIngredientField =(props) => {

  if (props.addRecipeButton) {
    return props.addedId.includes(props.foodItem.id)
    ? <button 
        onClick={() => props.cancelAddingIngredient(props.foodItem.id)}
        className={`${classes.cancelAddingBtn} globalBtn`}
      >
        Отмена
      </button>
    : <span>
        <AddingIngredientForm
          foodId={props.foodItem.id} 
          addIngredientToRecipe={props.addIngredientToRecipe}
        />
      </span>
  }
  return null
} 

export default AddingIngredientField