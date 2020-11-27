import React from 'react'
import './../../../App.css'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {SexInput, WeightInput} from './../../common/ForForms/FormikInputs'

const DailyWaterForm = (props) => {

  const validationSchema = Yup.object({
    sex: Yup.string()
      .required('Обязательное поле'),
    weight: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно весишь больше нуля :)')
      .integer('Введи целое число')
      .required('Обязательное поле'),
  })
  const initialValues = {
    sex: '',
    weight: '',
  }

  const onSubmit = (value) => props.forSubmit(value)

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <label htmlFor='sex'>Пол:</label>
        <SexInput/>

        <label htmlFor='weight'>Вес(кг)</label>
        <WeightInput/>

        <button 
          className='globalMainBtn' 
          type='submit'
        >
          Узнать суточную норму воды
        </button>
      
      </Form>
    </Formik>
  )
}

export default DailyWaterForm