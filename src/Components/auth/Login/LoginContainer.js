import React from 'react'
import { withRouter} from 'react-router-dom';
import Login from './Login'
import { connect } from 'react-redux';
import {login, signUp} from './../../../redux/authReducer'


class LoginContainer extends React.Component {
  render() {
    return (
      this.props.match.path === '/login' 
        ? <Login welcomeText='Авторизация' button='Войти' {...this.props.loginData} action={this.props.login}/>
        : <Login welcomeText='Регистрация' button='Регистрация' {...this.props.loginData} action={this.props.signUp} />
    )
  }
}

const mapStateToProps = (state) => ({
  loginData: state.authReducer
})

export default withRouter(connect(mapStateToProps, {login, signUp})(LoginContainer))