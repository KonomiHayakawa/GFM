import React from 'react'
import classes from './MainProfileData.module.css'
import NameEditingForm from './NameEditingForm'
import ErrorMessage from '../../common/ErrorMessage'
import defaultAvatar from './../../../img/default/avatar.svg'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const MainProfileData = (props) => {
  return (
    <div>
      <div>
      <Avatar size={64} icon={<UserOutlined />} src={props.mainData.avatar || defaultAvatar} />
         {/* <img src={props.mainData.avatar || defaultAvatar} alt='avatar' className={classes.avatar} /> */}
        { props.editingAvatar
        ? <div id='kek'>
            <input type='file' accept='.jpg, .jpeg, .png' onChange={(event) => props.setUserAvatar(event.target.files[0])}/>  
            <button onClick={() => props.changeAvatar()}>Сохранить</button>
          </div>
        : <div>
            <button onClick={() => props.switchEditingAvatar(true)}>Сменить аватар</button>
            {props.mainData.avatar && <button onClick={() => props.deleteAvatar()}>Удалить</button>}
          </div>
        }
      </div>

    {props.editingName
    ? <div>
        <NameEditingForm changeName={props.changeName} name={props.mainData.name}/>
      </div>
    : <div>
        {props.mainData.name}
        <button onClick={() => {props.switchEditingName(true)}}>Изменить ник</button>
      </div>
    }

    {props.error && <ErrorMessage />}

    </div>
  )
}

export default MainProfileData