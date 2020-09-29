import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {signUp} from '../../../redux/authReducer'
import Registration from './Registration';
import {saveName, saveAvatar} from './../../../redux/userPersonalData'
// import defaultAvatar from './../../../img/default/avatar.svg'


const RegistrationContainer = (props) => {

  if (props.authData.isAuth === true) {
    return <Redirect to={'/profile'}/>
  }

  const addNewUserMainData = (nickname) => {
    props.saveName(nickname)
  }

  return (
    <Registration {...props} addNewUserMainData={addNewUserMainData}/>
  )
}

const mapStateToProps = (state) => ({
  authData: state.authReducer
})

export default connect(mapStateToProps, {saveName, saveAvatar, signUp})(RegistrationContainer)