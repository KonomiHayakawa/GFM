import React from 'react'
import {QuestionCircleOutlined} from '@ant-design/icons'
import { Statistic, Row, Col } from 'antd'
import BMIExplanation from './BMIExplanation'
import BMIForm from './BMIForm'
import classes from './BMICalculator.module.css'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'
import './../../../App.css'

const BMICalculator = (props) => {
 
  return (
    <div>
      {!props.bodyMassIndex || props.isChangingData
        ? (
          <div>
            <h2>Узнать индекс массы тела</h2>
            <BMIForm updateBMI={props.updateBMI}/>
          </div>
        )
        : (
          <div className={classes.resultWrapper}>
            <div>
              <Row gutter={16} className='globalAntStyle'>
                <Col span={12}>
                  <Statistic 
                    title={
                      <div className={classes.headerWrapper}>
                        <h2>Твой индекс массы тела</h2>
                        <QuestionCircleOutlined 
                          className={classes.showInfoIcon} 
                          onClick={() => props.toggleShowExplanation(!props.showExplanation)}
                        />
                      </div>
                    }
                    value={props.bodyMassIndex}
                  />
                </Col>
              </Row>

              <div className={classes.infoAlert}>
                {props.showExplanation && <BMIExplanation />}
              </div>
              
            </div>

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

export default BMICalculator