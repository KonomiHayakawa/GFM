import React from 'react'
import classes from './MainProfileData.module.css'
import ErrorMessage from '../../common/ErrorMessage'
import defaultAvatar from './../../../img/default/avatar.svg'
import {EditOutlined} from '@ant-design/icons'
import { Input } from 'antd'
import './../../../App.css'
import UploadNewImageForm from './../../common/UploadNewImageForm/UploadNewImageForm'

const MainProfileData = (props) => {

  return (
    <div className={classes.wrapper}>

      <div className={classes.avatarAreaWrapper}>
        <img className={classes.avatar} src={props.mainData.avatar || defaultAvatar}></img>
        {props.editingAvatar
          ? <UploadNewImageForm     
              setImgData={props.setUserAvatar}
              forLoading={props.changeAvatar}
              forCancel={() => props.switchEditingAvatar(false)}
            />
          : <div>
              <button 
                className={`${classes.btn} globalBtn`}
                onClick={() => props.switchEditingAvatar(true)}
              >
                Изменить {!props.mainData.avatar && 'аватар'}
              </button>
              {props.mainData.avatar && 
                <button 
                  className={`${classes.btn} globalBtn`}
                  onClick={() => props.deleteAvatar()}
                >
                  Удалить
                </button>}
            </div>
        }
      </div>

      <div>
        {props.editingName
          ? <div className={classes.nameInput}>
              <Input 
                onChange={(e) => props.setUserName(e.target.value)}
                onPressEnter={() => props.changeName()}
                onBlur={() => props.changeName()}
                bordered={false}
                style={{  borderBottom:"1px solid #3fa9ff9c"}}
                defaultValue={props.mainData.name}
                maxLength={10}
              />
            </div>
          : <div className={classes.nickName}>
              {props.mainData.name} 
              <span className={classes.editNameBtn}>
                <EditOutlined 
                  onClick={() => {props.switchEditingName(true)}}
                />
              </span>
            </div>
        }
      </div>

      {props.error && <ErrorMessage />}
    </div>
  )
}

export default MainProfileData