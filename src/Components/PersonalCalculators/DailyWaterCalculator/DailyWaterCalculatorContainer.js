import React, { useState } from 'react'
import DailyWaterCalculator from './DailyWaterCalculator'
import { connect } from 'react-redux'
import {setDailyWater, saveDailyWater} from '../../../redux/userPersonalData'
import {calcDailyWater} from '../../common/calculations'

const DailyWaterCalculatorContainer = (props) => {

  const [isChangingData, toggleIsChangingData] = useState(false)

  const updateDailyWater = (form) => {
    const dailyWater = calcDailyWater(form)
    props.userData.isAuth
    ? props.saveDailyWater(props.userData.userId, form.gender, form.weight, dailyWater)
    : props.setDailyWater(dailyWater)
    toggleIsChangingData(false)
  }

  return (
    <DailyWaterCalculator 
      dailyWater={props.dailyWater} 
      updateDailyWater={updateDailyWater}
      isChangingData={isChangingData}
      toggleIsChangingData={toggleIsChangingData}/>
  )
  
}

const mapStateToProps = (state) => {
  return ({
    userData: state.authReducer,
    dailyWater: state.userPersonalData.dailyWater,
  })
}

export default connect(mapStateToProps, {setDailyWater, saveDailyWater})(DailyWaterCalculatorContainer)