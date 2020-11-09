import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Popover, Alert } from 'antd'
import {SyncOutlined, QuestionCircleOutlined} from '@ant-design/icons'
import BMIExplanation from './../../personalCalculators/BodyMassIndexCalculator/BMIExplanation'
import dailyCaloriesImg from './../../../img/personalCalculations/dailyCalories.png'
import dailyWaterImg from './../../../img/personalCalculations/dailyWater.png'
import bodyMassIndex from './../../../img/personalCalculations/bodyMassIndex.png'
import classes from './CalculationData.module.css'

const CalculationsData = (props) => {

  const calculationsDataArr = [
    {
      title:'Дневная норма калорий', 
      calcResult: props.userData.dailyCalories ? `${props.userData.dailyCalories} ккал` : 'Пока не знаю :(', 
      img:dailyCaloriesImg,
      actions: [],
      calcAgainLink: '/personalCalculators/dailyCalories',
      id:1
    },
    {
      title:'Дневная норма воды', 
      calcResult: props.userData.dailyWater ? `${props.userData.dailyWater} л.` : 'Пока не знаю :(', 
      img:dailyWaterImg, 
      actions: [],
      calcAgainLink: '/personalCalculators/dailyWater',
      id:2
    },
    {
      title:'Индекс массы тела', 
      calcResult:props.userData.bodyMassIndex || 'Пока не знаю :(', 
      img:bodyMassIndex, 
      actions: [
        <Popover content={
          <BMIExplanation  
            style={{ width: 360 }} 
          />} 
          trigger="click"
        >
          <QuestionCircleOutlined /> Как это?
        </Popover>
      ],
      calcAgainLink: '/personalCalculators/bodyMassIndex',
      id:3
    },
  ]

  return (
    <div className={classes.calculationsWrapper}>

      {calculationsDataArr.map((data) => {
        return <CalculationItem
          data={data} 
          key={data.id}
          {...props}
        />
      })}

      {!props.userData.bodyMassIndex && !props.userData.dailyWater && !props.userData.bodyMassIndex &&
        <div className={classes.welcomeText}>
          <Alert 
            message={
              <span>Здесь будут храниться результаты твоих индивидуальных рассчетов. 
                Пока что здесь пусто, но чтобы это исправить, переходи
                к <NavLink to='/personalCalculators'>калькуляторам</NavLink> и 
                узнай свои показатели :)
              </span>
            } 
            type="info" 
            showIcon
          />
        </div>
      }
      
    </div>
  )
}

const CalculationItem = (props) => {

  const { Meta } = Card

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <NavLink to={props.data.calcAgainLink}>
          <SyncOutlined /> Посчитать
        </NavLink>,
        ...props.data.actions
      ]}
      cover={
        <img
          alt={props.data.title}
          src={props.data.img}
          style={{height: '150px', width: 'auto', margin: '0 auto'}}
        />
      }
    >
      <Meta
        title={props.data.calcResult}
        description={props.data.title} 
      />
    </Card>
  )
}


export default CalculationsData