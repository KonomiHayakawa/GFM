import firebase from './../firebase'

const storage = firebase.storage()
const storageRef = storage.ref()

export const addUserParameter = (userId, parameterName, parameter) => {
  let updates = {}
  updates[`UsersData/${userId}/${parameterName}`] = parameter
  return firebase.database().ref().update(updates)
}

export const getAllUserInfo = (userId) => {
  return firebase.database().ref(`/UsersData/${userId}`).once('value')
}

export const getUserData = () => {
  const user = firebase.auth().currentUser
  if (user != null) {
    return user.providerData[0]
  }
}

// nickname

export const updateUserName = (name) => {
  const user = firebase.auth().currentUser
    return user.updateProfile({
    displayName: name,
  })
}

// avatar

export const addAvatarFile = (userId, avatar) => {
  const userAvatarRef = storageRef.child(`${userId}/avatar.jpg`)
  return userAvatarRef.put(avatar)
}

export const getAvatarLink = (userId) => {
  return storageRef.child(`${userId}/avatar.jpg`).getDownloadURL()
}

export const updateAvatar = (avatarLink) => {
  const user = firebase.auth().currentUser
    return user.updateProfile({
      photoURL: avatarLink,
  })
}

export const deleteAvatarFile = (userId) => {
  const desertRef = storageRef.child(`${userId}/avatar.jpg`)
  return desertRef.delete().then(function() {
  })
}

export const getDefaultAvatarLink = () => {
  return storageRef.child(`default/defaultAvatar.png`).getDownloadURL()
}
