import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const NameEditingForm = (props) => {
  const validationSchema = Yup.object({
    newName: Yup.string()
    .typeError('Введи новый ник')
    .required('Нельзя оставаться без ника :)')
    .min(5, 'Минимальная длина - 5 символов')
  })
  
  const initialValues = {
    newName: props.name,
  }


  const onSubmit = (formData) => {
    props.changeName(formData.newName)
  }
  
  return (
    
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {() => (
        <Form>
          <div>
            <label htmlFor="newName">Новый ник:</label>
            <Field name='newName' type='text'></Field>
            <ErrorMessage component='div' name='newName' />
          </div>
          <div>
            <button type='submit' name="submit">Изменить</button>
         
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default NameEditingForm


