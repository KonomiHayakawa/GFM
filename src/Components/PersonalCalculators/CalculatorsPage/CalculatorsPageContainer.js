import React from 'react'
import CalculatorsPage from './CalculatorsPage'
import { connect } from 'react-redux'

const CalculatorsPageContainer = (props) => {

  return (
    <CalculatorsPage
      {...props}
    />
  )
}

const mapStateToProps = (state) => ({
  calculatorsData: state.userPersonalData,
  isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {})(CalculatorsPageContainer)