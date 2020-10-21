import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Ripple } from 'react-preloaders'
import MainProfileData from './MainProfileData'
import {saveName, saveAvatar} from './../../../redux/userPersonalData'
import {addAvatarFile, getAvatarLink, deleteAvatarFile} from './../../../queries/personalData'
import { setError } from '../../../redux/forError'


const MainProfileDataContainer = (props) => {

  const [editingName, switchEditingName] = useState(false)
  const [editingAvatar, switchEditingAvatar] = useState(false)
  const [userAvatar, setUserAvatar] = useState('')
  // const [loadingImg, setLoadingImg] = useState(false)

  const changeName = (name) => {
    try {
      props.saveName(name)
      switchEditingName(false)
    } catch (error) {
      props.setError(error)
    }
  }

  const changeAvatar = () => {
    try {
      // setLoadingImg(true)
      addAvatarFile(props.userId, userAvatar)
      .then(() => getAvatarLink(props.userId))
      .then((avatarLink) => props.saveAvatar(avatarLink))
      .then(() => switchEditingAvatar(false))
      // .then(() => (setLoadingImg(false)))
    } catch (error) {
      props.setError(error)
    }
  }

  const deleteAvatar = () => {
    try {
      deleteAvatarFile(props.userId)
      .then(() => props.saveAvatar(null))
    } catch (error) {
      props.setError(error)
    }
  }

  return (
    <React.Fragment>
      <MainProfileData
        {...props} 
        editingName={editingName} 
        switchEditingName={switchEditingName} 
        changeName={changeName}
        changeAvatar={changeAvatar}
        editingAvatar={editingAvatar}
        switchEditingAvatar={switchEditingAvatar}
        setUserAvatar={setUserAvatar}
        deleteAvatar={deleteAvatar}
        // loadingImg={loadingImg}
      />
      <Ripple customLoading={false}/> 
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  mainData: state.userPersonalData.mainData,
  userId: state.authReducer.userId,
  email: state.authReducer.userEmail,
  error: state.forError.error
})

export default connect(mapStateToProps, {saveName, saveAvatar, setError})(MainProfileDataContainer)