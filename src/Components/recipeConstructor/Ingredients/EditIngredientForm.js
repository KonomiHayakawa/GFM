import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const EditIngredientForm = (props) => {
  const validationSchema = Yup.object({
    newWeight: Yup.number()
    .typeError('Введи число')
    .positive('Ты точно добавишь больше нуля грамм:)')
    .required('Обязательное поле'),
  })
  
  const initialValues = {
    newWeight: '',
    ingredient: props.ingredient
  }


  const onSubmit = (formData) => {
    props.editIngredientAndCalculate(formData.ingredient, formData.newWeight)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {() => (
        <Form>
          <div>
            <Field name='newWeight' type='number' placeholder='вес в граммах'></Field>
            <ErrorMessage component='div' name='newWeight' />
            <Field type='hidden' name="ingredient" />
          </div>
          <div>
            <button type='submit' name="submit">Изменить</button>
            <button type='reset' name="cancel" onClick={() => {props.cancelEditing()}}>Отмена</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default EditIngredientForm