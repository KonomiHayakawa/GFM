import React from 'react'
import Login from './Login'
import { connect } from 'react-redux';
import {login, signUp} from './../../../redux/authReducer'
import { Redirect } from 'react-router-dom'


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