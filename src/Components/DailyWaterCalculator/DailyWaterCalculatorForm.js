import React from 'react'
import classes from './DailyWaterCalculator.module.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const DailyWaterForm = (props) => {

  const validationSchema = Yup.object({
    gender: Yup.string()
      .required('Обязательное поле'),
    weight: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно весишь больше нуля :)')
      .integer('Введи целое число')
      .required('Обязательное поле'),
  })
    const initialValues = {
      gender: '',
      weight: '',
    }

    const onSubmit = (value) => props.forSubmit(value)

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div>
          Твой пол:
        </div>
        <div>
          <Field type='radio' name='gender' id='male' value='male'/>
          <label htmlFor="male">Мужской</label>
          <Field type='radio' name='gender' id='female' value='female' />
          <label htmlFor="female">Женский</label>
          <ErrorMessage component='div' name='gender' />
        </div>
        <div>
          <label htmlFor="weight">Вес (кг):</label>
          <Field name='weight' id='weight' type='text' placeholder='75'></Field>
          <ErrorMessage component='div' name='weight' />
        </div>
        <div>
          <button type='submit'>Узнать суточную норму воды</button>
        </div>
      </Form>
      </Formik>
  )
}

export default DailyWaterForm