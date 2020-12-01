import React from 'react'
import classes from './Ingredients.module.css'
import IngredientsTableContainer from './IngredientsTable/IngredientsTableContainer'
import './../../../App.css'

const Ingredients = (props) => {
  return (
    <div className={classes.ingredientsWrapper}>
      <h2>Ингредиенты</h2>

      <div>
        {props.addedFood.length === 0 && 
          <p>Ты не добавил ни одного ингредиента для блюда.</p>
        }

        {props.addedFood.length !== 0 && 
          <IngredientsTableContainer showEditingField={true}/>
        } 
      </div>

      {!props.showIngredientsArea && 
        <button 
          className={`${classes.addIngredientBtn} globalBtn`} 
          onClick={() => props.setShowIngredientsArea(true)}
        > 
          Добавить
        </button>
      }

      {props.showIngredientsArea && 
        <button 
          className={`${classes.addIngredientBtn} globalBtn`} 
          onClick={() => props.closeIngredientsArea()}
        > 
          Готово
        </button>
      }
    </div>
  )
}

export default Ingredients