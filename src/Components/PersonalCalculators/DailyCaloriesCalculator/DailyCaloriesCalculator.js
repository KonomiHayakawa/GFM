import React from 'react'
import classes from './DailyCaloriesCalculator.module.css'
import DailyCaloriesForm from './DailyCaloriesForm'
import { NavLink } from 'react-router-dom';

const DailyCalories = (props) => {
  return (
    <div>
      { !props.dailyCalories || props.isChangingData
        ? (
          <div>
            <div>
              Если ты <NavLink to={'/login'}>зарегистрируешься</NavLink> на этом сайте, сможешь сохранить все 
              свои показатели и отслеживать их изменения. А если у тебя уже есть аккаунт, не забудь 
              <NavLink to={'/login'}>авторизироваться</NavLink>!:)
            </div>
            <h2 className={classes.title}>
              Рассчитать дневную норму калорий
            </h2>
            <h4 className={classes.explanation}>
              Введи свои данные ниже и узнай, сколько калорий в день тебе можно съедать со спокойной душой
            </h4>
            <DailyCaloriesForm forSubmit={(obj) => props.updateCalories(obj)}/>
          </div>
        )
        : (
          <div>
            <div>
              Твоя дневная норма калорий:
            </div>
            <div>
              {props.dailyCalories} ккал
            </div>
            <div>
              <button onClick={() => props.toggleIsChangingData(true)}>
                Посчитать заново
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}



export default DailyCalories