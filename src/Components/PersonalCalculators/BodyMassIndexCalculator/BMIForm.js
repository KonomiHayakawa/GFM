import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import classes from './BMICalculator.module.css'
import {AntInput} from "./../../common/antDesignForFormik/antDesignForFormik";

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
        <label htmlFor="height">Рост (см)</label>
          <Field 
            component={AntInput} 
            style={{ width: 300}} 
            name='height' 
            id='height' 
            type='text' 
          />
          
          <label htmlFor="weight">Вес(кг)</label>
          <Field
            component={AntInput} 
            style={{ width: 300}}  
            name='weight' 
            id='weight' 
            type='text'  
          />

          <button className={classes.calculateAgainButton} type='submit'>Узнать индекс массы тела</button>
      </Form>
    </Formik>
  )
}

export default BodyMassIndexForm