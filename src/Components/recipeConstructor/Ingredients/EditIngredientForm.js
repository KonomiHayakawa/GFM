import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import classes from './Ingredients.module.css'
import './../../../App.css'
import {IngredientWeightInput} from './../../common/ForForms/FormikInputs'

const EditIngredientForm = (props) => {
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
    props.editIngredientAndCalculate(props.ingredient, Number(formData.ingredientWeight))
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {() => (
        <Form>
        
          <IngredientWeightInput/>
            
          <div>
            <button 
              className={`${classes.editingBtn} globalBtn` }
              type='submit' 
              name='submit'
            >
              Изменить
            </button>
            <button 
              className={`${classes.editingBtn} globalBtn` }
              type='reset' 
              name='cancel' 
              onClick={() => {props.cancelEditing()}}
            >
              Отмена
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default EditIngredientForm