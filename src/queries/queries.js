import firebase from './../firebase';

export const registration = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const authentication = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const logout = () => {
  firebase.auth().signOut().then(() => console.log('logout'))
}

export const onAuthStateChange = (func) => {
  firebase.auth().onAuthStateChanged(func)
}
 
export const addPhysicalData = (userId, sex, height, weight, age, dailyActivity) => {
// firebase.database().ref(`/UsersData/${userId}/PhysicalData`).set({sex:, height, weight, age, dailyActivity})
}

export const addDailyCalories = (userId, dailyCalories) => {
  return firebase.database().ref(`/UsersData/${userId}/CaloriesData/`).set({dailyCalories: dailyCalories})
}

export const addDailyWater = (userId, dailyWater) => {
  // firebase.database().ref(`/UsersData/${userId}/WaterData`).set({dailyWater})
}

export const addAccountData = (userId, avatarImg, name, birthday) => {
  // firebase.database().ref(`/UsersData/${userId}/AccountData`).set({avatarImg, name, birthday})
}

export const kek = (userId, ) => {
  // firebase.auth().signOut().then(n => console.log(n))

  // firebase.database().ref('/124').once('value').then((snapshot) => {
  //   console.log(snapshot.val())
  // })
}