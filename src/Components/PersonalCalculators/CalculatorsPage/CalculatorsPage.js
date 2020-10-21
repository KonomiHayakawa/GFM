import React from 'react'
import classes from './CalculatorsPage.module.css'
import DailyCaloriesContainer from '../DailyCaloriesCalculator/DailyCaloriesCalculatorContainer'
import DailyWaterCalculatorContainer from '../DailyWaterCalculator/DailyWaterCalculatorContainer'
import BMICalculatorContainer from '../BodyMassIndexCalculator/BMICalculatorContainer';
import { NavLink } from 'react-router-dom';
import dailyCaloriesImg from './../../../img/personalCalculations/dailyCalories.svg'
import dailyWaterImg from './../../../img/personalCalculations/dailyWater.svg'
import bodyMassIndexImg from './../../../img/personalCalculations/bodyMassIndex.svg'
import {ReactComponent as PageMainImage} from './../../../img/personalCalculations/mainImage.svg';
import CalculatorSwitcher from './../CalculatorSwitcher/CalculatorSwitcher'

const CalculatorsPage = (props) => {

  const calculatorOptions = [
    {name:'dailyCalories', title:'Дневная норма калорий', img: dailyCaloriesImg, id: 1},
    {name:'dailyWater', title:'Дневная норма воды', img: dailyWaterImg, id: 2},
    {name:'bodyMassIndex', title:'Индекс массы тела', img: bodyMassIndexImg, id: 3},
  ]
  return (
    <div className={classes.calculatorsPageWrapper}>

      <div className={classes.pageMainImage}>
        <PageMainImage />
      </div>
      
      <div className={classes.calculatorsAreaWrapper}>

        <div className={classes.calculatorsArea}>
          <h1>Индивидуальные рассчеты</h1>
          {!props.chosenCalculator &&
            <p>Когда знаешь свою норму калорий, становится в разы проще контролировать питание. А поддерживая
              водный баланс, ты помогаешь обмену веществ работать быстрее. И это надо не только для похудения!
              Проверь свой индекс массы тела, возможно, тебе даже необходимы несколько допольнительных кг.
            </p>
          }
          {!props.isAuth && 
            <div>
              Если ты <NavLink to={'/login'}>зарегистрируешься</NavLink> на этом сайте, сможешь сохранить все 
              свои показатели и отслеживать их изменения. А если у тебя уже есть аккаунт, не забудь 
              <NavLink to={'/login'}> авторизироваться</NavLink>! :)
            </div>
          }
          {props.chosenCalculator === 'dailyCalories' && <DailyCaloriesContainer />}
          {props.chosenCalculator === 'dailyWater' && <DailyWaterCalculatorContainer />}
          {props.chosenCalculator === 'bodyMassIndex' && <BMICalculatorContainer />}
        </div>

        <div className={classes.calculatorsSwitchers}>
          {calculatorOptions.map(
            option => {
              return <CalculatorSwitcher 
                option={option} 
                setChosenCalculator={props.setChosenCalculator}
                key={option.id}
              />
            })
          }
        </div>

      </div>    
    </div>
  )
}

export default CalculatorsPage