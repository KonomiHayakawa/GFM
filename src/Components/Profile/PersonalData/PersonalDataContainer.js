import React, { useState } from 'react'
import { connect } from 'react-redux'
import {calcDailyCalories, calcDailyWater, calcBodyMassIndex} from './../../common/calculations'
import PersonalData from './PersonalData'
import {saveDailyCalories, saveDailyWater, saveBodyMassIndex} from './../../../redux/userPersonalData'
import {setError} from './../../../redux/forError'

const PersonalDataContainer = (props) => {
  const [editingFieldName, setEditingFieldName] = useState(false)

  const editPersonalData = (form) => {
    const dailyCalories = Math.round(calcDailyCalories(form))
    const dailyWater = calcDailyWater(form)
    const bodyMassIndex = calcBodyMassIndex(form)
    try {
      props.saveDailyCalories(props.userId, form, dailyCalories) 
        .then(() => props.saveDailyWater(props.userId, form, dailyWater))
        .then(() => props.saveBodyMassIndex(props.userId, form, bodyMassIndex))
        .then(() => setEditingFieldName(false))
        .then(() => console.log('here'))
    } catch (error) {
      props.setError(error)
    }
  }

  return (
    <PersonalData 
      editPersonalData={editPersonalData}
      editingFieldName={editingFieldName} 
      error={props.error} 
      setEditingFieldName={setEditingFieldName}
      userData={props.userData} 
    />
  )
}

const mapStateToProps = (state) => ({
  error: state.forError.error,
  userData: state.userPersonalData,
  userId: state.authReducer.userId,
})

export default connect(mapStateToProps, {saveDailyCalories, saveDailyWater, saveBodyMassIndex, setError})(PersonalDataContainer)