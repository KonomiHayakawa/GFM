import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {saveName} from './../../../redux/userPersonalData'
import {signUp} from '../../../redux/authReducer'
import Registration from './Registration'


const RegistrationContainer = (props) => {

  if (props.authData.isAuth === true) {
    return <Redirect to={'/profile'}/>
  }

  const addNewUserMainData = (nickname) => {
    props.saveName(nickname)
  }

  return (
    <Registration 
      addNewUserMainData={addNewUserMainData}
      signUp={props.signUp}
    />
  )
}

const mapStateToProps = (state) => ({
  authData: state.authReducer
})

export default connect(mapStateToProps, {saveName, signUp})(RegistrationContainer)