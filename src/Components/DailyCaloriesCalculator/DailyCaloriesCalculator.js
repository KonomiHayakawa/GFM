import React from 'react'
import classes from './DailyCaloriesCalculator.module.css'
import * as firebase from 'firebase';


const DailyCalories = (props) => {
  return (
    <div>
      <h2 className={classes.title}>
        Рассчитать дневную норму калорий
      </h2>
      <h4 className={classes.explanation}>
        Введи свои данные ниже и узнай, сколько калорий в день тебе можно съедать со спокойной душой
      </h4>
      <form className={classes.form}>
        <div>
          Твой пол:
        </div>
        <div className={classes.selectSexBlock}>
          <input type='radio' name='gender' id='male' value='male' className={classes.sexRadio} />
          <label htmlFor="male">Мужской</label>
          <span className="checkmark"></span>
          <input type='radio' name='gender' id='female' value='female' />
          <label htmlFor="female">Женский</label>
          <span className="checkmark"></span>
        </div>
        <div>
          Рост:
        </div>
        <div>
          <input type='text' placeholder='180' className={classes.input}></input>
        </div>
        <div>
          Вес:
        </div>
        <div>
          <input type='text' placeholder='75' className={classes.input}></input>
        </div>
        <div>
          Возвраст:
        </div>
        <div>
          <input type='text' placeholder='30' className={classes.input}></input>
        </div>
        <div>
          Уровень ежедневной активности:
        </div>
        <div>
          <select className={classes.input}>
            <option>Минимальный уровень активности</option>
            <option>Низкий уровень активности</option>
            <option>Средний уровень активности</option>
            <option>Высокий уровень</option>
            <option>Очень высокий</option>
          </select>
        </div>
      </form>
      <div className={classes.resultBlock}>
        <div>
          Твоя дневная норма:
        </div>
        <div className={classes.resultField}>
          1500 ккал
        </div>
      </div>
    </div>
  )
}

export default DailyCalories