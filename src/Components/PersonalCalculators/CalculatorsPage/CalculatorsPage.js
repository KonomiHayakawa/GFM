import React from 'react'
import classes from './CalculatorsPage.module.css'
import DailyCaloriesContainer from '../DailyCaloriesCalculator/DailyCaloriesCalculatorContainer'
import DailyWaterCalculatorContainer from '../DailyWaterCalculator/DailyWaterCalculatorContainer'
import BMICalculatorContainer from '../BodyMassIndexCalculator/BMICalculatorContainer';
import { NavLink } from 'react-router-dom';


const CalculatorsPage = (props) => {

  return (
    <div className={classes.calculatorsPage}>
      {!props.isAuth && 
        <div>
          Если ты <NavLink to={'/login'}>зарегистрируешься</NavLink> на этом сайте, сможешь сохранить все 
          свои показатели и отслеживать их изменения. А если у тебя уже есть аккаунт, не забудь 
          <NavLink to={'/login'}> авторизироваться</NavLink>!:)
        </div>
      }
      <DailyCaloriesContainer />
      <DailyWaterCalculatorContainer />
      <BMICalculatorContainer />
    </div>
  )
}

export default CalculatorsPage