import React, { useState } from 'react'
import { connect } from "react-redux"
import CalculationsData from './CalculationsData'
import {calcDailyCalories, calcDailyWater, calcBodyMassIndex} from './../../common/calculations'
import {saveDailyCalories, saveDailyWater, saveBodyMassIndex} from './../../../redux/userPersonalData'
import {setError} from './../../../redux/forError'

const CalculationsDataContainer = (props) => {

  const [editingMode, switchEditingMode] = useState(false)
  const [showBMIExplanation, toggleShowBMIExplanation] = useState(false)

  const editCalculationsData = (form) => {
    const dailyCalories = Math.round(calcDailyCalories(form))
    const dailyWater = calcDailyWater(form)
    const bodyMassIndex = calcBodyMassIndex(form)
    try {
      props.saveDailyCalories(props.userId, form, dailyCalories) 
        .then(() => props.saveDailyWater(props.userId, form, dailyWater))
        .then(props.saveBodyMassIndex(props.userId, form, bodyMassIndex))
        .then(() => switchEditingMode(false))
    } catch (error) {
      props.setError(error)
    }
  }

  return <CalculationsData 
    userData={props.userData} 
    editingMode={editingMode} 
    switchEditingMode={switchEditingMode}
    editCalculationsData={editCalculationsData}
    error={props.error} 
    showBMIExplanation={showBMIExplanation}
    toggleShowBMIExplanation={toggleShowBMIExplanation}
  />
}

const mapStateToProps = (state) => {
  return ({
    userData: state.userPersonalData,
    userId: state.authReducer.userId,
    error: state.forError.error,
  })
}

export default connect(mapStateToProps, {saveDailyCalories, saveDailyWater, saveBodyMassIndex, setError})(CalculationsDataContainer)