import React from 'react'
import {LeftCircleTwoTone} from '@ant-design/icons'
import classes from './BackArrow.module.css'



const BackArrow = (props) => {
  return (
    <div onClick={() => props.clickAction()} className={classes.wrapper}>
      <LeftCircleTwoTone twoToneColor="#3fa9ff"/>
      <span className={classes.text}>Назад</span>
    </div>
  )
}

export default BackArrow