import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const BodyMassIndexForm = (props) => {

  const validationSchema = Yup.object({
    height: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно выше :)')
      .integer('Введи целое число')
      .required('Обязательное поле'),
    weight: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно весишь больше нуля :)')
      .required('Обязательное поле'),
  })
    
  const initialValues = {
    height: '',
    weight: '',
  }

  const onSubmit = (value) => props.updateBMI(value)

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="height">Рост (см):</label>
          <Field name='height' id='height' type='text' placeholder='180'></Field>
          <ErrorMessage component='div' name='height' />
        </div>
        <div>
          <label htmlFor="weight">Вес (кг):</label>
          <Field name='weight' type='text' placeholder='75'></Field>
          <ErrorMessage component='div' name='weight' />
        </div>
        <div>
          <button type='submit'>Узнать индекс массы тела</button>
        </div>
      </Form>
      </Formik>
  )
}

export default BodyMassIndexForm