import React from 'react'
import classes from './ControlledInputs.module.css'

export const Input = ({input, meta, ...props}) => {
  return (
    <div className={classes.input}>
     {meta.touched && meta.error && <span className={classes.warning}>{meta.error}</span>}
      <input {...input} {...props}/>
    </div>
  )
}