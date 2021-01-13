import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import './../../../App.css'
import {HeightInput, WeightInput} from '../../common/ForForms/FormikInputs'

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

  const onSubmit = (formData) => props.updateBMI(formData)

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <label htmlFor='height'>Рост (см)</label>
        <HeightInput
          placeholder=''
        />
          
          <label htmlFor='weight'>Вес(кг)</label>
          <WeightInput
            placeholder=''
          />

          <button 
            className='globalMainBtn'
            type='submit'
          >
            Узнать индекс массы тела
          </button>
      </Form>
    </Formik>
  )
}

export default BodyMassIndexForm