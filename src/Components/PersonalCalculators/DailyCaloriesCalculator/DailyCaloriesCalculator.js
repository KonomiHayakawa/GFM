import React from 'react'
import classes from './DailyCaloriesCalculator.module.css'
import DailyCaloriesForm from './DailyCaloriesForm'
import ErrorMessage from '../../common/ErrorMessage'
      

const DailyCalories = (props) => {
  return (
    <div>
      { !props.dailyCalories || props.isChangingData
        ? (
          <div>
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
      {props.errorMessage && <ErrorMessage />}
    </div>
  )
}



export default DailyCalories