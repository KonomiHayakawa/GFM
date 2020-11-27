import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Popover, Alert } from 'antd'
import {CalculatorOutlined, QuestionCircleOutlined} from '@ant-design/icons'
import BMIExplanation from './../../personalCalculators/BodyMassIndexCalculator/BMIExplanation'
import bodyMassIndex from './../../../img/personalCalculations/bodyMassIndex.png'
import classes from './CalculationData.module.css'
import dailyCaloriesImg from './../../../img/personalCalculations/dailyCalories.png'
import dailyWaterImg from './../../../img/personalCalculations/dailyWater.png'


const CalculationsData = (props) => {

  const calculationsDataArr = [
    {
      title: 'Дневная норма калорий', 
      calcResult: props.userData.dailyCalories && `${props.userData.dailyCalories} ккал`, 
      img: dailyCaloriesImg,
      actions: [],
      calcAgainLink: '/personalCalculators/dailyCalories',
      id: 1,
    },
    {
      title: 'Дневная норма воды', 
      calcResult: props.userData.dailyWater && `${props.userData.dailyWater} л.`, 
      img: dailyWaterImg, 
      actions: [],
      calcAgainLink: '/personalCalculators/dailyWater',
      id: 2,
    },
    {
      title: 'Индекс массы тела', 
      calcResult: props.userData.bodyMassIndex, 
      img: bodyMassIndex, 
      actions: [
        <Popover 
          content={
            <BMIExplanation className={classes.bmiExplanationAlert}/>
          } 
          trigger='click'
        >
          <span className={classes.cardFooterItem}>
            <QuestionCircleOutlined /> Как это?
          </span>
        </Popover>
      ],
      calcAgainLink: '/personalCalculators/bodyMassIndex',
      id: 3,
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
              <span>
                Здесь будут храниться результаты твоих индивидуальных рассчетов. 
                Пока что здесь пусто, но чтобы это исправить, переходи
                к <NavLink to='/personalCalculators'>калькуляторам</NavLink> и 
                узнай свои показатели :)
              </span>
            } 
            type='info' 
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
      actions={[
        <span className={classes.cardFooterItem}>
          <NavLink to={props.data.calcAgainLink}>
            <CalculatorOutlined /> Посчитать
          </NavLink>
        </span>,
        ...props.data.actions
      ]}
      className={classes.card}
      cover={
        <img
          alt={props.data.title}
          src={props.data.img}
          className={classes.cardCover}
        />
      }
    >
      <Meta
        title={
          <span className={classes.calcResult}>
            {props.data.calcResult || 'Пока не знаю :('}
          </span>
        }
        description={props.data.title} 
      />
    </Card>
  )
}


export default CalculationsData