import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {login, signUp} from './../../../redux/authReducer'
import Login from './Login'


const LoginContainer = (props) => {

  if (props.loginData.isAuth === true) {
    return <Redirect to={'/profile'}/>
  }
  
  return <Login {...props}/>
  
}

const mapStateToProps = (state) => ({
  loginData: state.authReducer
})

export default connect(mapStateToProps, {login, signUp})(LoginContainer)