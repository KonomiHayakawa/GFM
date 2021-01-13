import React from 'react'
import {EditOutlined} from '@ant-design/icons'
import { Input } from 'antd'
import {isMobile} from 'react-device-detect'
import classes from './NickNameArea.module.css'
import './../../../../App.css'
import ErrorMessage from './../../../common/ErrorMessage/ErrorMessage'

const NickNameArea = (props) => {
  return (
    <>
      {props.editingName ? ( 
        <div>
          {isMobile ? ( 
            <MobileNameChanging {...props}/>
          ) : (
            <DesktopNameChanging {...props}/>
          )}
        </div>
      ) : (
        <div className={classes.nickName}>
          {props.mainData.name}  
          <span className={classes.editNameBtn}>
            <EditOutlined 
              onClick={() => {props.switchEditingName(true)}}
            />
          </span>
        </div>
      )}
      {props.error && <ErrorMessage />}
    </>
  )
}

const DesktopNameChanging = (props) => {
  return (
    <Input 
      bordered={false}
      className={classes.nameInput}
      defaultValue={props.mainData.name}
      maxLength={10}
      onChange={(e) => props.setUserName(e.target.value)}
      onPressEnter={() => props.changeName()}
      onBlur={() => props.changeName()}
    />
  )
}

const MobileNameChanging =  (props) => {
  return (
    <>
      <DesktopNameChanging {...props}/>
      <div>
        <button 
          className={`${classes.btn} globalBtn`}
          onClick={() => props.changeName()}
        >
          Изменить
        </button>
      </div>
    </>
  )
}

export default NickNameArea