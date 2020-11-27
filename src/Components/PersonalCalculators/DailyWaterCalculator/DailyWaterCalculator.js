import React from 'react'
import { Statistic, Row, Col } from 'antd'
import classes from './DailyWaterCalculator.module.css'
import DailyWaterForm from './DailyWaterCalculatorForm'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'
import './../../../App.css'

const DailyWaterCalculator = (props) => {
  return (
    <div>
      { !props.dailyWater || props.isChangingData
        ? (
          <div>
            <h2 className={classes.title}>
              Рассчитать дневную норму воды
            </h2>
            <DailyWaterForm forSubmit={props.updateDailyWater}/>
          </div>
        )
        : (
          <div>
            <Row gutter={16} className={`globalAntStyle ${classes.results}`}>
              <Col span={12}>
                <Statistic 
                  title={
                    <h2 className={classes.resultHeading}>Твоя дневная норма воды</h2>
                  }
                  value={`${props.dailyWater} л.`}
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
        )
      }
      {props.error && <ErrorMessage />}
    </div>
  )
}

export default DailyWaterCalculator