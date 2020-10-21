import React from 'react'
import { Alert } from 'antd';
import classes from './BMICalculator.module.css';

const BMIExplanation = (props) => {

  const data = [
    {'index': 'ИМТ ≥ 18.5', 'explanation':'Ниже нормального веса', id: 1},
    {'index': 'ИМТ ≥ 18.5 и < 25', 'explanation':'Нормальный вес', id: 2},
    {'index': 'ИМТ ≥ 25 и < 30', 'explanation':'Избыточный вес', id: 3},
    {'index': 'ИМТ ≥ 30 и < 35', 'explanation':' Ожирение I степени', id: 4},
    {'index': 'ИМТ ≥ 35 и < 40', 'explanation':'Ожирение II степени', id: 5},
    {'index': 'ИМТ ≥ 40', 'explanation':'Ожирение III степени', id: 6}
  ]

  return (
    <div>
      <Alert 
        message={
          <div> 
            <table>
              <tbody>
                {data.map(item => {
                  return <React.Fragment key={item.id}>
                    <tr>
                    <td>
                      {item.index}:
                    </td>
                    <td>
                      {item.explanation}
                    </td>
                  </tr>
                  </React.Fragment>
                })}
              </tbody>
            </table>
          </div>
        }
        type="info" 
        showIcon 
      />

    </div>
  )
}

export default BMIExplanation