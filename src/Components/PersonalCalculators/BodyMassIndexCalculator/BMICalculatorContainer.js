import React, { useState } from 'react'
import BMICalculator from './BMICalculator'
import { connect } from 'react-redux'
import {saveBodyMassIndex, setBodyMassIndex} from '../../../redux/userPersonalData'
import {calcBodyMassIndex} from '../../common/calculations'
import {setError} from './../../../redux/forError'

const BMICalculatorContainer = (props) => {

  const [isChangingData, toggleIsChangingData] = useState(false)
  const [showExplanation, toggleShowExplanation] = useState(false)

  const updateBMI = (form) => {
    const BodyMassIndex = calcBodyMassIndex(form)
    props.userData.isAuth
      ? props.saveBodyMassIndex(props.userData.userId, form.weight, form.height, BodyMassIndex)
        // .catch((error) => props.setError(error))
      : props.setBodyMassIndex(BodyMassIndex)
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
    />
  )

}

const mapStateToProps = (state) => {
  return ({
    userData: state.authReducer,
    bodyMassIndex: state.userPersonalData.bodyMassIndex,
    errorMessage: state.forError.errorMessage,
  })
}

export default connect(mapStateToProps, {saveBodyMassIndex, setBodyMassIndex, setError})(BMICalculatorContainer)