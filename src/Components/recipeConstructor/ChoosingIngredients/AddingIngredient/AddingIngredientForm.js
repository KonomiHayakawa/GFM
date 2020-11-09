import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {AntInput} from '../../../common/antDesignForFormik/antDesignForFormik'
import classes from './AddingIngredient.module.css'
import './../../../../App.css'

const AddingIngredientForm = React.memo((props) => {

  const validationSchema = Yup.object({
    weight: Yup.number()
    .typeError('Введи число')
    .positive('Ты точно добавишь больше нуля грамм:)')
    .required('Обязательное поле'),
  })
  
  const initialValues = {
    weight: '',
  }

  const onSubmit = (formData) => {
    props.addIngredientToRecipe({ingredientId:props.foodId, weight: Number(formData.weight) })
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {(props) => (
        <Form>
          <Field 
            component={AntInput} 
            style={{ width: '100%'}} 
            placeholder='вес в г.'
            name='weight' 
            id={props.foodId} 
            type='number' 
          />

          {props.values.weight &&
            <button 
              type='submit' 
              name='submit'
              className={`${classes.addIngredientBtn} globalBtn`}
            >
              Добавить
            </button>
          }
        </Form>
      )}
    </Formik>
  )
})

export default AddingIngredientForm
