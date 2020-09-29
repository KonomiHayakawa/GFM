import React from 'react'
import classes from './MainProfileData.module.css'
import NameEditingForm from './NameEditingForm'
import ErrorMessage from '../../common/ErrorMessage'
import defaultAvatar from './../../../img/default/avatar.svg'

const MainProfileData = (props) => {

  return (
    <div>
      <div>
        <img src={props.mainData.avatar || defaultAvatar} alt='avatar' className={classes.avatar} />
        { props.editingAvatar
        ? <div>
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

    {props.errorMessage && <ErrorMessage />}

    </div>
  )
}

export default MainProfileData