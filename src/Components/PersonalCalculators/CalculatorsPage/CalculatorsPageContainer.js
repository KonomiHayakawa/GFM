import React, { useState } from 'react'
import CalculatorsPage from './CalculatorsPage'
import { connect } from 'react-redux'

const CalculatorsPageContainer = (props) => {

  const [chosenCalculator, setChosenCalculator] = useState(false)

  return (
    <CalculatorsPage
      {...props}
      chosenCalculator={chosenCalculator}
      setChosenCalculator={setChosenCalculator}
    />
  )
}

const mapStateToProps = (state) => ({
  calculatorsData: state.userPersonalData,
  isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {})(CalculatorsPageContainer)