import React from 'react'
import classes from './DailyWaterCalculator.module.css'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {AntSelect, AntInput} from "./../../common/antDesignForFormik/antDesignForFormik";

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
      <label htmlFor="sex">Пол:</label>
        <Field 
          component={AntSelect}
          selectOptions={[
            {name:'Мужской', value: 'male'},
            {name:'Женский', value:'female'},
          ]}
          style={{ width: 300}}
          name='sex'
          id='sex'
        />

        <label htmlFor="weight">Вес(кг)</label>
        <Field
          component={AntInput} 
          style={{ width: 300}}  
          name='weight' 
          id='weight' 
          type='text'  
        />

 
          <button className={classes.calculateAgainButton} type='submit'>Узнать суточную норму воды</button>
      
      </Form>
    </Formik>
  )
}

export default DailyWaterForm