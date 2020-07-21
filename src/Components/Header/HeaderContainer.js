import React from 'react'
import Header from "./Header";
import { connect } from 'react-redux';
import {signOut, setUserData} from './../../redux/authReducer'
import {onAuthStateChange} from './../../queries/queries'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.onAuthStateChange((user) => {
      this.props.setUserData(!!user, user.uid, user.email);
    })
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.authReducer,
  onAuthStateChange,
})

export default connect(mapStateToProps, {signOut, setUserData})(HeaderContainer)