import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {SexInput, HeightInput, WeightInput, AgeInput, ActivityTypeInput} from './../../common/ForForms/FormikInputs'
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
          <SexInput 
            style={{width: '100%'}} 
          />
        }
        
        {props.editingField === 'height' &&
          <HeightInput 
            style={{width: '100%'}} 
          />
        }

        {props.editingField === 'weight' &&
          <WeightInput 
            style={{width: '100%'}} 
          />
        }

        {props.editingField === 'age' &&
          <AgeInput 
            style={{width: '100%'}} 
          />
        }

        {props.editingField === 'activityType' &&
          <ActivityTypeInput 
            style={{width: '100%'}} 
          />
        }

        <div>
          <button 
            type='submit'
            className='globalBtn'
          >
            Изменить
          </button>
          <button 
            type='reset' 
            onClick={() => props.cancelEditing(false)}
            className='globalBtn'
          >
            Отменить
          </button>

        </div>
      </Form>
    </Formik>
  )
}

export default CalculationsDataEditingForm