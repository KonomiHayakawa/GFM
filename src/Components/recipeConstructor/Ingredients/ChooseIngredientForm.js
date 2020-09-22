import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const ChooseIngredientForm = (props) => {
  const validationSchema = Yup.object({
    weight: Yup.number()
    .typeError('Введи число')
    .positive('Ты точно добавишь больше нуля грамм:)')
    .required('Обязательное поле'),
  })
  
  const initialValues = {
    weight: '',
    ingredientId: props.ingredientId,
  }


  const onSubmit = (formData) => {
    props.addIngredientToRecipe(formData)
  }
  
  return (
    
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {(props) => (
        <Form>
          <div>
            <label htmlFor="weight">Вес (граммы):</label>
            <Field name='weight' type='number' placeholder='кол-во в граммах'></Field>
            <ErrorMessage component='div' name='weight' />
            <Field type='hidden' name='productId' />
          </div>
          <div>
            <button type='submit' name="submit">Добавить</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ChooseIngredientForm


