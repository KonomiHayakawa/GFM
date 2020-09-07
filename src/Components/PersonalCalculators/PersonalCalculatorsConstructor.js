import React, { useState } from 'react'
import PersonalCalculators from './PersonalCalculators'
import { connect } from 'react-redux'

class PersonalCalculatorsConstructor extends React.Component {
  render() {
    return (
      <PersonalCalculators {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  calculatorsData: state.userPersonalData,
  isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {})(PersonalCalculatorsConstructor)