import React from 'react'
import BMIForm from './BMIForm'
import ErrorMessage from '../../common/ErrorMessage'
import BMIExplanation from './BMIExplanation'

const BMICalculator = (props) => {

  return (
    <div>
      { !props.bodyMassIndex || props.isChangingData
        ? (
          <div>
            <p>Узнать индекс массы тела:</p>
            <BMIForm updateBMI={props.updateBMI}/>
          </div>
        )
        : (
          <div>
            <div>
              Твой ИМС: {props.bodyMassIndex.toFixed(2)}
              
              <button onClick={() => props.toggleShowExplanation(!props.showExplanation)}>
                Что это значит?
              </button>
              {props.showExplanation && <BMIExplanation />}
            </div>

            <button onClick={() => props.toggleIsChangingData(true)}>
              Посчитать заново
            </button>

          </div>
        )
      }
      {props.errorMessage && <ErrorMessage />}
    </div>
  )
}

export default BMICalculator