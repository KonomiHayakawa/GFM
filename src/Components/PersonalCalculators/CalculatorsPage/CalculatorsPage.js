import React from 'react'
import classes from './CalculatorsPage.module.css'
import DailyCaloriesContainer from '../DailyCaloriesCalculator/DailyCaloriesCalculatorContainer'
import DailyWaterCalculatorContainer from '../DailyWaterCalculator/DailyWaterCalculatorContainer'
import BMICalculatorContainer from '../BodyMassIndexCalculator/BMICalculatorContainer';
import { NavLink } from 'react-router-dom';
import dailyCaloriesImg from './../../../img/personalCalculations/dailyCalories.svg'
import dailyWaterImg from './../../../img/personalCalculations/dailyWater.svg'
import bodyMassIndexImg from './../../../img/personalCalculations/bodyMassIndex.svg'

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
     
      <div className={classes.calculatorSwitcher}>
        <div onClick={() => props.setChosenCalculator('dailyCalories')} className={classes.calculatorOption}>
          <img className={classes.calculatorImg} src={dailyCaloriesImg} alt='dailyCalories'/>
          Дневная норма калорий
        </div>
        <div onClick={() => props.setChosenCalculator('dailyWater')} className={classes.calculatorOption}>
          <img className={classes.calculatorImg} src={dailyWaterImg} alt='dailyWater'/>
          Дневная норма воды
        </div>
        <div onClick={() => props.setChosenCalculator('bodyMassIndex')} className={classes.calculatorOption}>
          <img className={classes.calculatorImg} src={bodyMassIndexImg} alt='bodyMassIndex'/>
          Индекс массы тела
        </div>
      </div>

      {props.chosenCalculator === 'dailyCalories' && <DailyCaloriesContainer />}
      {props.chosenCalculator === 'dailyWater' && <DailyWaterCalculatorContainer />}
      {props.chosenCalculator === 'bodyMassIndex' && <BMICalculatorContainer />}
    </div>
  )
}

export default CalculatorsPage