import React from 'react'
import { Statistic, Row, Col } from 'antd'
import './../../../App.css'

const RecipeCalculations = (props) => {
  const weight = props.nutritionalValue.totalWeight >= 1000
    ? (props.nutritionalValue.totalWeight / 1000).toFixed(2)
    : props.nutritionalValue.totalWeight

  const units = props.nutritionalValue.totalWeight >= 1000
    ? 'кг'
    : 'грамм'

  return (
    <div>
      <h2>Итого</h2>
      <Row gutter={16} className='globalAntStyle'>
        <Col span={12}>
          <Statistic 
            title='Калорийность блюда (ккал)' 
            value={props.nutritionalValue.totalCalories}
          />
        </Col>
        <Col span={12}>
          <Statistic 
            title={`Bес сырой заготовки (${units})`} 
            value={weight} 
            precision={2}
          />
        </Col>
      </Row>
    </div>
  )
}

export default RecipeCalculations