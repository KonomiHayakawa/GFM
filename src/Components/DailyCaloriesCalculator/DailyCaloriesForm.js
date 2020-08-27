import React from 'react'
import classes from './DailyCaloriesCalculator.module.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const DailyCaloriesForm = (props) => {

  const validationSchema = Yup.object({
    gender: Yup.string()
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
    activityLevel: Yup.string()
      .required('Обязательное поле'),
  })
    const initialValues = {
      gender: '',
      height: '',
      weight: '',
      age: '',
      activityLevel: '',
    }

    const onSubmit = (value) => props.forSubmit(value)

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={classes.form}>
        <div>
          Твой пол:
        </div>
        <div className={classes.selectSexBlock}>
          <Field type='radio' name='gender' id='male' value='male' className={classes.sexRadio} />
          <label htmlFor="male">Мужской</label>
          <Field type='radio' name='gender' id='female' value='female' />
          <label htmlFor="female">Женский</label>
          <ErrorMessage component='div' className={classes.warning} name='gender' />
        </div>
        <div>
          <label htmlFor="height">Рост (см):</label>
          <Field name='height' id='height' type='text' placeholder='180' className={classes.input}></Field>
          <ErrorMessage component='div' className={classes.warning} name='height' />
        </div>
        <div>
          <label htmlFor="weight">Вес (кг):</label>
          <Field name='weight' type='text' placeholder='75' className={classes.input}></Field>
          <ErrorMessage component='div' className={classes.warning} name='weight' />
        </div>
        <div>
          <label htmlFor="age">Возвраст:</label>
          <Field name='age' id='age' type='text' placeholder='30' className={classes.input}></Field>
          <ErrorMessage component='div' className={classes.warning} name='age' />
        </div>
        <div>
          <label htmlFor="activityLevel">Уровень ежедневной активности:</label>
          <Field as='select' name='activityLevel' id='activityLevel' className={classes.input}>
            <option value='1.2'>Минимальный уровень активности</option>
            <option value='1.375'>Низкий уровень активности</option>
            <option value='1.55'>Средний уровень активности</option>
            <option value='1.725'>Высокий уровень</option>
            <option value='1.9'>Очень высокий</option>
          </Field>
          <ErrorMessage component='div' className={classes.warning} name='activityLevel' />
        </div>
        <div>
          <button type='submit'>Узнать норму калорий</button>
        </div>
      </Form>
      </Formik>
  )
}

export default DailyCaloriesForm