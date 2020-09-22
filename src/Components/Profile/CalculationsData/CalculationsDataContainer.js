import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import CalculationsData from './CalculationsData'
import {calcDailyCalories, calcDailyWater, calcBodyMassIndex} from './../../common/calculations'
import {saveDailyCalories, saveDailyWater, saveBodyMassIndex} from './../../../redux/userPersonalData'
import {setError} from './../../../redux/forError'

const CalculationsDataContainer = (props) => {

  const [editingMode, switchEditingMode] = useState(false)

  const editCalculationsData = (form, whatChanged) => {
    const dailyCalories = Math.round(calcDailyCalories(form))
    const dailyWater = calcDailyWater(form)
    const bodyMassIndex = calcBodyMassIndex(form)
    props.saveDailyCalories(props.userId, form.sex, form.weight, form.height, form.age, form.activityLevel, dailyCalories) 
      .then(() => {
        if (whatChanged === 'caloriesAndBodyMassIndex') { 
          props.saveBodyMassIndex(props.userId, form.weight, form.height, bodyMassIndex)
        } else if (whatChanged === 'caloriesAndWater') {
          props.saveDailyWater(props.userId, form.sex, form.weight, dailyWater) 
        } else {
          props.saveDailyWater(props.userId, form.sex, form.weight, dailyWater) 
          props.saveBodyMassIndex(props.userId, form.weight, form.height, bodyMassIndex)
        }
      })
      .then(() => switchEditingMode(false))
      .catch((error) => props.setError(error))
  }

  return <CalculationsData 
    userData={props.userData} 
    editingMode={editingMode} 
    switchEditingMode={switchEditingMode}
    editCalculationsData={editCalculationsData}
    errorMessage={props.errorMessage} 
  />
}

const mapStateToProps = (state) => {
  return ({
    userData: state.userPersonalData,
    userId: state.authReducer.userId,
    errorMessage: state.forError.errorMessage,
  })
}

export default connect(mapStateToProps, {saveDailyCalories, saveDailyWater, saveBodyMassIndex, setError})(CalculationsDataContainer)