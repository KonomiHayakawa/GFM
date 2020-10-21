import React from 'react'
import EditIngredientForm from './EditIngredientForm'
import classes from './Ingredients.module.css'
import { Table } from 'antd'
import 'antd/dist/antd.css'

const Ingredients = (props) => {
  const columns = [
    {
      dataIndex: 'img',
      key: 'img',
      render: link => <img src={link} alt='ingredient' />,
      width: '5%',
    },
    {
      title: 'Ингредиент',
      dataIndex: 'title',
      key: 'title',
      width: '40%',
    },
    {
      title: 'Вес г.',
      dataIndex: 'weight',
      key: 'weight',
      width: '10%',
    },
    {
      key: 'action',
      width: '45%',
      render: (text, ingredient) => (
        <>
          {props.editingWeight !==  ingredient.id && 
            <button onClick={() => {props.switchEditingWeight(ingredient.id)}} className={classes.editBtn}>
              Изменить
            </button>
          }
          {!props.showModal && !props.editingWeight &&
            <button onClick={() => {props.deleteIngredientAndCalculate(ingredient)}} className={classes.deleteBtn}> 
              Удалить
            </button>
          }
          {props.editingWeight === ingredient.id && 
            <EditIngredientForm ingredient={ingredient}
              editIngredientAndCalculate={props.editIngredientAndCalculate}
              cancelEditing={props.switchEditingWeight}
            />
          }
        </>
      )
    },
  ]

  return (
    <div className={classes.ingredientsWrapper}>
      <h2>Ингредиенты</h2>

      <div>
        {props.constructorData.addedFood.length === 0 && 
          <p>Ты не добавил ни одного ингредиента для блюда.</p>
        }

        {props.constructorData.addedFood.length !== 0 && 
          <Table 
            columns={columns} 
            pagination={false} 
            dataSource={props.constructorData.addedFood}
            rowKey={ingredient => ingredient.id}
            className={classes.ingredientsTable}
            ellipsis={true}
          />
        } 
      </div>

      {!props.showModal && 
        <button 
          className={classes.addIngredientBtn} 
          onClick={() => props.setShowModal(true)}
        > 
          Добавить
        </button>
      }

      {props.showModal && 
        <button 
          className={classes.addIngredientBtn} 
          onClick={() => props.closeModal()}
        > 
          Готово
        </button>
      }
    </div>
  )
}

export default Ingredients