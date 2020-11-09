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

      {!props.showModal && 
        <button 
          className={`${classes.addIngredientBtn} globalBtn`} 
          onClick={() => props.setShowModal(true)}
        > 
          Добавить
        </button>
      }

      {props.showModal && 
        <button 
          className={`${classes.addIngredientBtn} globalBtn`} 
          onClick={() => props.closeModal()}
        > 
          Готово
        </button>
      }
    </div>
  )
}

export default Ingredients