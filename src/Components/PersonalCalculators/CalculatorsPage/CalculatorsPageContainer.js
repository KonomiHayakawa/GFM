import React, { useState } from 'react'
import CalculatorsPage from './CalculatorsPage'
import { connect } from 'react-redux'

class CalculatorsPageContainer extends React.Component {
  render() {
    return (
      <CalculatorsPage {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  calculatorsData: state.userPersonalData,
  isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {})(CalculatorsPageContainer)