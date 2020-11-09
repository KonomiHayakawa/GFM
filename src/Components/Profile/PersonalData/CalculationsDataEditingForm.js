import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {AntSelect, AntInput} from './../../common/antDesignForFormik/antDesignForFormik'
import classes from './PersonalData.module.css'
import './../../../App.css'

const CalculationsDataEditingForm = (props) => {

  const validationSchema = Yup.object({
    height: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно выше :)')
      .integer('Введи целое число'),
    weight: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно весишь больше :)'),
    age: Yup.number()
      .typeError('Введи число')
      .positive('Ты точно старше :)')
      .integer('Введи целое число'),
  })
    const initialValues = {
      sex: props.userData.sex,
      height: props.userData.height,
      weight: props.userData.weight,
      age: props.userData.age,
      activityType: props.userData.activityType,
    }

    const onSubmit = (form) => {
      props.editPersonalData(form)
    }

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        {props.editingField === 'sex' &&
          <Field 
            component={AntSelect}
            selectOptions={[
              {name:'Мужской', value: 'male'},
              {name:'Женский', value:'female'},
            ]}
            style={{ width: 200}}
            name='sex'
            id='sex'
          />
        }
        
        {props.editingField === 'height' &&
          <Field 
            component={AntInput} 
            style={{ width: 200}} 
            name='height' 
            id='height' 
            type='text' 
          />
        }

        {props.editingField === 'weight' &&
          <Field
            component={AntInput} 
            style={{ width: 200}}  
            name='weight' 
            id='weight' 
            type='text'  
          />
        }

        {props.editingField === 'age' &&
          <Field 
            component={AntInput} 
            style={{ width: 200}} 
            name='age' 
            id='age' 
            type='text' 
          />
        }

        {props.editingField === 'activityType' &&
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
        }

        <div>
          <button 
            type='submit'
            className={`${classes.button} globalBtn`}
          >
            Изменить
          </button>
          <button 
            type='reset' 
            onClick={() => props.cancelEditing(false)}
            className={`${classes.button} globalBtn`}
          >
            Отменить
          </button>

        </div>
      </Form>
    </Formik>
  )
}

export default CalculationsDataEditingForm