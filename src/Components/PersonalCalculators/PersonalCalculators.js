import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './PersonalCalculators.module.css'
import DailyCaloriesContainer from '../DailyCaloriesCalculator/DailyCaloriesCalculatorContainer'
import DailyWaterCalculatorContainer from '../DailyWaterCalculator/DailyWaterCalculatorContainer'

const personalCalculators = () => {
  return (
    <div className={classes.calculatorsPage}>
      <div className={classes.reminderToLogin}>
        Если ты <NavLink to={'/login'}>зарегистрируешься</NavLink> на этом сайте, сможешь сохранить все 
        свои показатели и отслеживать их изменения. А если у тебя уже есть аккаунт, не забудь <NavLink to={'/login'}>авторизироваться</NavLink>!:)
      </div>
      <DailyCaloriesContainer />
      <DailyWaterCalculatorContainer />
    </div>
  )
}

export default personalCalculators