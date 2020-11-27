import React from 'react'
import './../../../../App.css'
import classes from './AvatarArea.module.css'
import defaultAvatar from './../../../../img/default/avatar.svg'
import UploadNewImageForm from './../../../common/ForForms/UploadNewImageForm/UploadNewImageForm'

const AvatarArea = (props) => {

  return (
    <div className={classes.avatarAreaWrapper}>
      <img 
        className={classes.avatar} 
        src={props.mainData.avatar || defaultAvatar}
        alt='avatar'
      />
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
              </button>
            }
          </div>
      }
    </div>
  )
}

export default AvatarArea