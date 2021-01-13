import firebase from './../firebase'

export const registration = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const authentication = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const logout = () => {
  return firebase.auth().signOut()
}

export const onAuthStateChange = (func) => {
  return firebase.auth().onAuthStateChanged(func)
}