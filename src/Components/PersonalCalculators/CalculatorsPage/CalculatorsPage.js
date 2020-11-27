import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import classes from './CalculatorsPage.module.css'
import BMICalculatorContainer from '../BodyMassIndexCalculator/BMICalculatorContainer'
import CalculatorSwitcher from './../CalculatorSwitcher/CalculatorSwitcher'
import DailyCaloriesContainer from '../DailyCaloriesCalculator/DailyCaloriesCalculatorContainer'
import DailyWaterCalculatorContainer from '../DailyWaterCalculator/DailyWaterCalculatorContainer'
import {ReactComponent as PageMainImage} from './../../../img/personalCalculations/mainImage.svg'
import bodyMassIndexImg from './../../../img/personalCalculations/bodyMassIndex.svg'
import dailyCaloriesImg from './../../../img/personalCalculations/dailyCalories.svg'
import dailyWaterImg from './../../../img/personalCalculations/dailyWater.svg'

const CalculatorsPage = (props) => {

  const calculatorOptions = [
    {link:'/personalCalculators/dailyCalories', title:'Дневная норма калорий', img: dailyCaloriesImg, id: 1},
    {link:'/personalCalculators/dailyWater', title:'Дневная норма воды', img: dailyWaterImg, id: 2},
    {link:'/personalCalculators/bodyMassIndex', title:'Индекс массы тела', img: bodyMassIndexImg, id: 3},
  ]
  return (
    <div className={classes.calculatorsPageWrapper}>

      <div className={classes.pageMainImage}>
        <PageMainImage/>
      </div>
      
      <div className={classes.calculatorsAreaWrapper}>

        <div className={classes.calculatorsArea}>
          <h1>Индивидуальные рассчеты</h1>
          <Switch>
            <Route path={`/personalCalculators/dailyCalories`} exact component={DailyCaloriesContainer} />
            <Route path={`/personalCalculators/dailyWater`} component={DailyWaterCalculatorContainer} />
            <Route path={`/personalCalculators/bodyMassIndex`} component={BMICalculatorContainer} />
            <Route path={`/personalCalculators`} render={() => <WelcomeText {...props} />} />
          </Switch>
        </div>

        <div className={classes.calculatorsSwitchers}>
          {calculatorOptions.map(
            option => {
              return (
                <CalculatorSwitcher 
                  option={option} 
                  key={option.id}  
                />
              )
            })
          }
        </div>

      </div>    
    </div>
  )
}

export default CalculatorsPage

const WelcomeText = (props) => {
  return (
    <>
      <p>Когда знаешь свою норму калорий, становится в разы проще контролировать питание. А поддерживая
        водный баланс, ты помогаешь обмену веществ работать быстрее. И это надо не только для похудения!
        Проверь свой индекс массы тела, возможно, тебе даже необходимы несколько допольнительных кг.
      </p>
      {!props.isAuth &&
        <div>
          Если ты <NavLink to={'/login'}>зарегистрируешься</NavLink> на этом сайте, сможешь сохранить все 
          свои показатели и отслеживать их изменения. А если у тебя уже есть аккаунт, не забудь 
          <NavLink to={'/login'}> авторизироваться</NavLink>! :)
        </div>
      }
    </>
  )
}