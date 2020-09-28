import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const FeedbackForm = (props) => {
  const validationSchema = Yup.object({
    name: Yup.string()
    .required('Не пропускай это поле!')
    .min(3, 'Минимальная длина - 3 символов'),
    email: Yup.string()
    .required('Не пропускай это поле!')
    .email('Некорректный адрес'),
    feedbackType: Yup.string()
    .required('Не пропускай это поле!'),
    feedbackDescription: Yup.string()
    .required('Не пропускай это поле!')
    .min(15, 'Минимальная длина - 15 символов'),
  })
  
  const initialValues = {
    name: '',
    email: '',
    feedbackType: '',
    feedbackDescription: '',
  }


  const onSubmit = (formData) => {
    props.sendFeedbackMessage(formData)
  }
  
  return (
    
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {() => (
        <Form>
          <div>
            <Field name='name' type='text' placeholder='Имя'></Field>
            <ErrorMessage component='div' name='name' />
          </div>
          <div>
            <Field name='email' type='email' placeholder='email'></Field>
            <ErrorMessage component='div' name='email' />
          </div>
          <div>
            <label htmlFor="feedbackType">Тип обращения:</label>
            <Field as='select' name='feedbackType' id='feedbackType'>
              <option value='complaint'>Жалоба</option>
              <option value='suggestion'>Предложение</option>
              <option value='question'>Вопрос</option>
            </Field>
            <ErrorMessage component='div' name='feedbackType' />
          </div>
          <div>
            <Field name='feedbackDescription' type='text' placeholder='Твое сообщение здесь...'></Field>
            <ErrorMessage component='div' name='feedbackDescription' />
          </div>
          <div>
            <button type='submit' name="submit">Отправить</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FeedbackForm


