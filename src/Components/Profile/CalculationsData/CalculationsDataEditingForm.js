import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const CalculationsDataEditingForm = (props) => {

  const validationSchema = Yup.object({
    sex: Yup.string(),
    height: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно выше :)')
      .integer('Введи целое число'),
    weight: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно весишь больше нуля :)'),
    age: Yup.number()
      .typeError('Введи число')
      .positive('Минусового возраста не бывает :)')
      .integer('Введи целое число'),
    activityLevel: Yup.string(),
  })
    const initialValues = {
      sex: props.userData.sex,
      height: props.userData.height,
      weight: props.userData.weight,
      age: props.userData.age,
      activityLevel: props.userData.activityType,
    }

    const onSubmit = (form) => {
      let whatChanged
      if (form.weight !== props.userData.weight) {
        whatChanged = 'all'
      } else if (form.sex !== props.userData.sex) {
        whatChanged = 'caloriesAndWater'
      } else if (form.height !== props.userData.height) {
        whatChanged = 'caloriesAndBodyMassIndex'
      } else {
        whatChanged = 'all'
      }
      props.editCalculationsData(form, whatChanged)
      


    }

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div>
        <label htmlFor="sex">Пол:</label>
        <Field as='select' name='sex' id='sex'>
          <option value='male'>Мужской</option>
          <option value='female'>Женский</option>
        </Field>
        <ErrorMessage component='div' name='sex' />
        </div>
        <div>
          <label htmlFor="height">Рост (см):</label>
          <Field name='height' id='height' type='text' placeholder='180' ></Field>
          <ErrorMessage component='div' name='height' />
        </div>
        <div>
          <label htmlFor="weight">Вес (кг):</label>
          <Field name='weight' type='text' placeholder='75'></Field>
          <ErrorMessage component='div' name='weight' />
        </div>
        <div>
          <label htmlFor="age">Возвраст:</label>
          <Field name='age' id='age' type='text' placeholder='30'></Field>
          <ErrorMessage component='div' name='age' />
        </div>
        <div>
          <label htmlFor="activityLevel">Уровень ежедневной активности:</label>
          <Field as='select' name='activityLevel' id='activityLevel'>
            <option value='1.2'>Минимальный уровень активности</option>
            <option value='1.375'>Низкий уровень активности</option>
            <option value='1.55'>Средний уровень активности</option>
            <option value='1.725'>Высокий уровень</option>
            <option value='1.9'>Очень высокий</option>
          </Field>
          <ErrorMessage component='div' name='activityLevel' />
        </div>
        <div>
          <button type='submit'>Изменить</button>
          <button type='reset' onClick={() => props.cancelEditing(false)}>Отменить</button>
        </div>
      </Form>
    </Formik>
  )
}

export default CalculationsDataEditingForm