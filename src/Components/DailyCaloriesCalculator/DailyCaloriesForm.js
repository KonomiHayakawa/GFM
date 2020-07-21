import React from 'react'
import classes from './DailyCaloriesCalculator.module.css'
import {useFormik} from 'formik'
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
  const formik = useFormik({
    initialValues: {
      gender: '',
      height: '',
      weight: '',
      age: '',
      activityLevel: '',
    },
    onSubmit: (value) => props.forSubmit(value),
    validationSchema
  })

  return (
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <div>
          Твой пол:
        </div>
        <div className={classes.selectSexBlock}>
          <input {...formik.getFieldProps('gender')} type='radio' name='gender' id='male' value='male' className={classes.sexRadio} />
          <label htmlFor="male">Мужской</label>
          <input {...formik.getFieldProps('gender')} type='radio' name='gender' id='female' value='female' />
          <label htmlFor="female">Женский</label>
          {formik.touched.gender && formik.errors.gender ? <div className={classes.warning}>{formik.errors.gender}</div> : null}
        </div>
        <div>
          Рост (см):
        </div>
        <div>
          <input {...formik.getFieldProps('height')} name='height' type='text' placeholder='180' className={classes.input}></input>
          {formik.touched.height && formik.errors.height ? <div className={classes.warning}>{formik.errors.height}</div> : null}
        </div>
        <div>
          Вес (кг):
        </div>
        <div>
          <input {...formik.getFieldProps('weight')} name='weight' type='text' placeholder='75' className={classes.input}></input>
          {formik.touched.weight && formik.errors.weight ? <div className={classes.warning}>{formik.errors.weight}</div> : null}
        </div>
        <div>
        </div>
        <div>
          Возвраст:
        </div>
        <div>
          <input {...formik.getFieldProps('age')} name='age' type='text' placeholder='30' className={classes.input}></input>
          {formik.touched.age && formik.errors.age ? <div className={classes.warning}>{formik.errors.age}</div> : null}
        </div>
        <div>
          Уровень ежедневной активности:
        </div>
        <div>
          <select {...formik.getFieldProps('activityLevel')} name='activityLevel' className={classes.input}>
            <option value='1.2'>Минимальный уровень активности</option>
            <option value='1.375'>Низкий уровень активности</option>
            <option value='1.55'>Средний уровень активности</option>
            <option value='1.725'>Высокий уровень</option>
            <option value='1.9'>Очень высокий</option>
          </select>
          {formik.touched.activityLevel && formik.errors.activityLevel ? <div className={classes.warning}>{formik.errors.activityLevel}</div> : null}
     
        </div>
        <div>
          <button type='submit'>Узнать норму калорий</button>
        </div>
      </form>
  )
}

export default DailyCaloriesForm