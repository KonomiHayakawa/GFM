import React from 'react'
import {Field} from 'formik'
import {AntInput, AntInputPassword, AntInputTextArea, AntSelect} from './antDesignForFormik/antDesignForFormik'
import './../../../App.css'

// auth 

export const EmailInput = (props) => {
  return (   
    <Field 
      component={AntInput} 
      className={`${props.className} globalInput`}
      bordered={false}
      name={props.name || 'email'}
      type='text' 
      placeholder={props.placeholder || 'Email'} 
      style={props.style || {borderBottom: '1px solid  #3fa9ff9c'}}
    />
  )
}

export const PasswordInput = (props) => {
  return (   
    <Field 
      component={AntInputPassword} 
      className={`${props.className} globalInput`}
      bordered={false}
      name={props.name || 'password' }
      type='password' 
      placeholder={props.placeholder || 'Пароль' } 
      style={props.style || {borderBottom: '1px solid  #3fa9ff9c'}}
      autoComplete='on'
    />
  )
}

export const NickNameInput = (props) => {
  return (   
    <Field 
      component={AntInput} 
      className={`${props.className} globalInput`}
      bordered={false}
      name={props.name || 'nickname'}
      type='text' 
      placeholder={props.placeholder || 'Никнейм'} 
      style={props.style || {borderBottom: '1px solid  #3fa9ff9c'}}
    />
  )
}

// feedback

export const MessageInput = (props) => {
  return (   
    <Field 
      component={AntInputTextArea} 
      className={`${props.className} globalInput`}
      bordered={false}
      name={props.name || 'message'}
      type='text' 
      placeholder={props.placeholder || 'Твое сообщение...'} 
      style={props.style || {border: '1px solid  #3fa9ff9c'}}
      {...props}
    />
  )
}

// personalData

export const SexInput = (props) => {
  return (   
    <Field 
      component={AntSelect} 
      className={props.className}
      name={props.name || 'sex'}
      style={props.style || {width: '300px'}}
      selectOptions={[
        {name:'Мужской', value: 'male'},
        {name:'Женский', value:'female'},
      ]}
      {...props}
    />
  )
}

export const HeightInput = (props) => {
  return (   
    <Field 
      component={AntInput} 
      className={props.className}
      name={props.name || 'height'} 
      type='number'
      placeholder={props.placeholder || 'Рост (см)'} 
      style={props.style || { width: 300}}
      {...props}
    />
  )
}

export const WeightInput = (props) => {
  return (   
    <Field 
      component={AntInput} 
      className={props.className}
      name={props.name || 'weight'} 
      type='number'
      placeholder={props.placeholder || 'Вес (кг)'} 
      style={props.style || { width: 300}}
      {...props}
    />
  )
}

export const AgeInput = (props) => {
  return (   
    <Field 
      component={AntInput} 
      className={props.className}
      name={props.name || 'age'} 
      type='number'
      placeholder={props.placeholder || 'Возраст'} 
      style={props.style || { width: 300}}
      {...props}
    />
  )
}

export const ActivityTypeInput = (props) => {
  return (   
    <Field 
      component={AntSelect} 
      className={props.className}
      name={props.name || 'activityType'} 
      style={props.style || { width: 300}}
      selectOptions={[
        {name:'Минимальный', value: '1.2'},
        {name:'Низкий', value: '1.375'},
        {name:'Средний', value:'1.55'},
        {name:'Высокий', value:'1.725'},
        {name:'Очень высокий', value:'1.9'}
      ]}
      {...props}
    />
  )
}

// recipeConstructor

export const IngredientWeightInput = (props) => {
  return (   
    <Field 
      component={AntInput} 
      className={props.className}
      name={props.name || 'ingredientWeight'} 
      type='number'
      placeholder={props.placeholder || 'Вес (в г.)'} 
      style={props.style || { width: '100%'}}
      {...props}
    />
  )
}

export const IngredientTitleInput = (props) => {
  return (   
    <Field 
      component={AntInput} 
      className={props.className}
      name={props.name || 'title'} 
      type='text' 
      placeholder={props.placeholder || 'Название блюда'} 
      style={props.style || { width: '30%'}}
      {...props}
    />
  )
}