import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import classes from './AddingIngredient.module.css'
import {IngredientWeightInput} from '../../../common/ForForms/FormikInputs'
import './../../../../App.css'

const AddingIngredientForm = React.memo((props) => {
  const validationSchema = Yup.object({
    ingredientWeight: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно добавишь больше нуля грамм:)')
      .required('Обязательное поле'),
  })
  
  const initialValues = {
    ingredientWeight: '',
  }

  const onSubmit = (formData) => {
    props.addIngredientToRecipe({ingredientId:props.foodId, weight: Number(formData.ingredientWeight) })
    return props.setMobileModalOpened ? props.setMobileModalOpened(false) : null
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {(props) => (
        <Form className={classes.form}>

          <IngredientWeightInput />

          {props.values.ingredientWeight && 
            <button 
              type='submit' 
              name='submit'
              className='globalBtn'
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