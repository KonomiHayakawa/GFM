import React from 'react'
import classes from './DailyCaloriesCalculator.module.css'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {AntSelect, AntInput} from "./../../common/antDesignForFormik/antDesignForFormik";

const DailyCaloriesForm = (props) => {

  const validationSchema = Yup.object({
    sex: Yup.string()
      .required('Обязательное поле'),
    height: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно выше :)')
      .integer('Введи целое число')
      .required('Обязательное поле'),
    weight: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно весишь больше нуля :)')
      .integer('Введи целое число')
      .required('Обязательное поле'),
    age: Yup.number()
      .typeError('Введи число')
      .positive('Минусового возраста не бывает :)')
      .integer('Введи целое число')
      .required('Обязательное поле'),
    activityType: Yup.string()
      .required('Обязательное поле'),
  })
    const initialValues = {
      sex: '',
      height: '',
      weight: '',
      age: '',
      activityType: '',
    }

  const onSubmit = (formData) => props.updateCalories(formData)

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
  
    
        <label htmlFor="age">Возвраст</label>
        <Field 
          component={AntInput} 
          style={{ width: 300}} 
          name='age' 
          id='age' 
          type='text' 
        />

        <label htmlFor="activityType">Уровень ежедневной активности:</label>
        <Field 
          component={AntSelect}
          selectOptions={[
            {name:'Минимальный уровень активности', value: '1.2'},
            {name:'Низкий уровень активности', value: '1.375'},
            {name:'Средний уровень активности', value:'1.55'},
            {name:'Высокий уровень', value:'1.725'},
            {name:'Очень высокий', value:'1.9'}
          ]}
          style={{ width: 300}}
          name='activityType'
          id='activityType'
        />

        <button className={classes.calculateAgainButton} type='submit'>Узнать норму калорий</button>

      </Form>
    </Formik>
  )
}

export default DailyCaloriesForm