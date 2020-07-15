import React from 'react'
import { withRouter} from 'react-router-dom';
import LoginPage from './LoginPage'
import { connect } from 'react-redux';
import {registration, authentication} from './../../queries/queries'


class LoginPageContainer extends React.Component {
  render() {
    return (
      this.props.match.path === '/login' 
        ? <LoginPage welcomeText='Авторизация' button='Войти' action={authentication}/>
        : <LoginPage welcomeText='Регистрация' button='Регистрация' action={registration} />
    )
  }
}



export default withRouter(LoginPageContainer)