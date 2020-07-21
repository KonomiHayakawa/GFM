import React from 'react'
import { withRouter} from 'react-router-dom';
import LoginPage from './LoginPage'
import { connect } from 'react-redux';
import {login, signUp} from './../../redux/authReducer'


class LoginPageContainer extends React.Component {
  render() {
    return (
      this.props.match.path === '/login' 
        ? <LoginPage welcomeText='Авторизация' button='Войти' {...this.props.loginData} action={this.props.login}/>
        : <LoginPage welcomeText='Регистрация' button='Регистрация' {...this.props.loginData} action={this.props.signUp} />
    )
  }
}

const mapStateToProps = (state) => ({
  loginData: state.authReducer
})

export default withRouter(connect(mapStateToProps, {login, signUp})(LoginPageContainer))