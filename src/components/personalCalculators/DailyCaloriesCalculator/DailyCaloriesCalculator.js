import React from 'react'
import { Statistic, Row, Col } from 'antd'
import classes from './DailyCaloriesCalculator.module.css'
import DailyCaloriesForm from './DailyCaloriesForm'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'
import './../../../App.css'
      
const DailyCalories = (props) => {
  return (
    <div>
      {!props.dailyCalories || props.isChangingData ? (
        <div>
          <h2 className={classes.title}>
            Рассчитать дневную норму калорий
          </h2>
          <DailyCaloriesForm updateCalories={props.updateCalories}/>
        </div>
      ) : (
        <div>
          <Row gutter={16} className={`globalAntStyle ${classes.results}`}>
            <Col span={20}>
              <Statistic  
                title={
                  <h2 className={classes.resultHeading}>
                    Твоя дневная норма калорий
                  </h2>
                }
                value={`${props.dailyCalories} ккал`}
              />
            </Col>
          </Row>
          <button 
            className='globalMainBtn'
            onClick={() => props.toggleIsChangingData(true)}
          >
            Посчитать заново
          </button>
        </div>
      )}
      {props.error && <ErrorMessage />}
    </div>
  )
}

export default DailyCalories