import React from 'react'
import classes from './../Ingredients.module.css'
import './../../../../App.css'
import { Table } from 'antd'
import EditIngredientForm from './../EditIngredientForm'
import { Popconfirm, message } from 'antd'

const IngredientsTable = (props) => {

  const confirmDeletingIngredient = (ingredient) => {
    props.deleteIngredientAndCalculate(ingredient)
    message.success('Удалено! :)');
  }
  
  const editingField = props.showEditingField
    ? { key: 'action',
        width: '45%',
        render: (text, ingredient) => (
          <>
            {props.editingWeight !==  ingredient.id && 
              <button 
                onClick={() => {props.switchEditingWeight(ingredient.id)}} 
                className={`${classes.editBtn} globalBtn`}
              >
                Изменить
              </button>
            }
            {!props.showModal && !props.editingWeight &&
              <Popconfirm
                title='Точно удалить?'
                onConfirm={() => confirmDeletingIngredient(ingredient)}
                onCancel={() => null}
                okText='Да'
                cancelText='Нет'
              >
                <button 
                  className={`${classes.deleteBtn} globalBtn`}
                > 
                  Удалить
                </button>
              </Popconfirm>
            }
            {props.editingWeight === ingredient.id && 
              <EditIngredientForm ingredient={ingredient}
                editIngredientAndCalculate={props.editIngredientAndCalculate}
                cancelEditing={props.switchEditingWeight}
              />
            }
          </>
        )
      }
    : {}

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
      ...editingField
    },
  ]

  return (
    <Table 
      columns={columns} 
      pagination={false} 
      dataSource={props.addedFood}
      rowKey={ingredient => ingredient.id}
      className={classes.ingredientsTable}
      ellipsis={true}
    />
  )
}

export default IngredientsTable
