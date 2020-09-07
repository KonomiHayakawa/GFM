import React, { useState } from 'react'
import BMICalculator from './BMICalculator'
import { connect } from 'react-redux'
import {saveBodyMassIndex, setBodyMassIndex} from './../../../redux/userPersonalData'
import {calcBodyMassIndex} from './../../common/calculations'

const BMICalculatorContainer = (props) => {

  const [isChangingData, toggleIsChangingData] = useState(false)

  const updateBMI = (form) => {
    const BodyMassIndex = calcBodyMassIndex(form)
    props.userData.isAuth
      ? props.saveBodyMassIndex(props.userData.userId, form.weight, form.height, BodyMassIndex)
      : props.setBodyMassIndex(BodyMassIndex)
    toggleIsChangingData(false)
  }

  return (
    <BMICalculator 
      updateBMI={updateBMI} 
      bodyMassIndex={props.bodyMassIndex} 
      isChangingData={isChangingData}
      toggleIsChangingData={toggleIsChangingData}
    />
  )

}

const mapStateToProps = (state) => {
  return ({
    userData: state.authReducer,
    bodyMassIndex: state.userPersonalData.bodyMassIndex
  })
}

export default connect(mapStateToProps, {saveBodyMassIndex, setBodyMassIndex})(BMICalculatorContainer)