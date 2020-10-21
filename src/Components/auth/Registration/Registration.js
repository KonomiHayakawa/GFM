import React from 'react'
import classes from './Registration.module.css'
import RegistrationForm from './RegistrationForm'

const Registration = (props) => {

  return (
    <div className={classes.wrapper}>
      <RegistrationForm signUp={props.signUp} addNewUserMainData={props.addNewUserMainData}/>
    </div>
  )
}



export default Registration