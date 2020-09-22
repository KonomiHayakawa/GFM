import React from 'react'
import EditIngredientForm from './EditIngredientForm';

const Ingredients = (props) => {
  return (
    <div>
      <h4>Ингредиенты</h4>

      <div>
        {props.constructorData.addedFood.length === 0 && (
          <div>
            <p>Ты не добавил ни одного ингредиента для блюда.</p>
          </div>
        )}

        {props.constructorData.addedFood.map(ingredient => {
          return (
          <div>
            <img src={ingredient.img} alt={ingredient.title} />
            {ingredient.title} {ingredient.weight}

            {props.editingWeight !==  ingredient.title && 
              <span onClick={() => {props.switchEditingWeight(ingredient.title)}}>
                (Изменить)
              </span>
            }

            {props.editingWeight === ingredient.title && 
              <EditIngredientForm ingredient={ingredient}
                editIngredientAndCalculate={props.editIngredientAndCalculate}
                cancelEditing={props.switchEditingWeight}
              />
            }
            <button onClick={() => {props.deleteIngredientAndCalculate(ingredient)}}>
              Удалить
            </button>
          </div>)
        })}
      </div>

      <div>
        <button onClick={() => props.setShowModal(true)}>Добавить</button>
      </div>
    </div>
  )
}
export default Ingredients