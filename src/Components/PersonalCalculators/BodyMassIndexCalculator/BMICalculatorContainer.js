import React, { useState } from 'react'
import { connect } from 'react-redux'
import {saveBodyMassIndex, setBodyMassIndex} from '../../../redux/userPersonalData'
import {calcBodyMassIndex} from '../../common/calculations'
import BMICalculator from './BMICalculator'
import {setError} from './../../../redux/forError'

const BMICalculatorContainer = (props) => {

  const [isChangingData, toggleIsChangingData] = useState(false)
  const [showExplanation, toggleShowExplanation] = useState(false)

  const updateBMI = (form) => {
    const BodyMassIndex = calcBodyMassIndex(form)
    if (props.userData.isAuth) {
      try {
        props.saveBodyMassIndex(props.userData.userId, form, BodyMassIndex)
      } catch (error) {
        props.setError(error)
      }
    } else {
      props.setBodyMassIndex(BodyMassIndex) 
    }
    toggleIsChangingData(false)
  }

  return (
    <BMICalculator 
      updateBMI={updateBMI} 
      bodyMassIndex={props.bodyMassIndex} 
      isChangingData={isChangingData}
      toggleIsChangingData={toggleIsChangingData}
      showExplanation={showExplanation}
      toggleShowExplanation={toggleShowExplanation}
      error={props.error}
    />
  )
}

const mapStateToProps = (state) => ({
  userData: state.authReducer,
  bodyMassIndex: state.userPersonalData.bodyMassIndex,
  error: state.forError.error,
})

export default connect(mapStateToProps, {saveBodyMassIndex, setBodyMassIndex, setError})(BMICalculatorContainer)