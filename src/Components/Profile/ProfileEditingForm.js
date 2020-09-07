import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const ProfileEditingForm = (props) => {

  const validationSchema = Yup.object({
      value: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно весишь больше нуля :)')
      .integer('Введи целое число')
      .required('Обязательное поле'),
  })
    const initialValues = {
      value: '',
    }

    const onSubmit = (newData) => console.log(newData)//props.saveData(newData)

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div>
          <Field name='value' id='value' type='text'></Field>
          <ErrorMessage component='div' name='value' />
        </div>
        <div>
          <button type='submit'>Сохранить</button>
          <button type='reset'>Отмена</button>
        </div>
      </Form>
      </Formik>
  )
}

export default ProfileEditingForm