import React from 'react'
import './../../../App.css'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {SexInput, HeightInput, WeightInput, AgeInput, ActivityTypeInput} from './../../common/ForForms/FormikInputs'

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

        <label htmlFor='sex'>Пол:</label>
        <SexInput/>

        <label htmlFor='height'>Рост (см)</label>
        <HeightInput   
          placeholder=''
        />
         
        <label htmlFor='weight'>Вес (кг)</label>
        <WeightInput
          placeholder=''
        />
  
        <label htmlFor='age'>Возраст</label>
        <AgeInput 
          placeholder=''
        />

        <label htmlFor='activityType'>Уровень ежедневной активности:</label>
        <ActivityTypeInput />

        <button 
          className='globalMainBtn'
          type='submit'
        >
          Узнать норму калорий
        </button>

      </Form>
    </Formik>
  )
}

export default DailyCaloriesForm