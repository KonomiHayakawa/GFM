import firebase from './../firebase';

export const getUserData = () => {
  const user = firebase.auth().currentUser
  if (user != null) {
    console.log('got user data')
    return user.providerData[0]
    //   console.log("Sign-in provider: " + profile.providerId);
    //   console.log("  Provider-specific UID: " + profile.uid);
    //   console.log("  Name: " + profile.displayName);
    //   console.log("  Email: " + profile.email);
    //   console.log("  Photo URL: " + profile.photoURL);
  }
}


export const registration = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => response)
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

export const addUserData = (name, avatar) => {
  const user = firebase.auth().currentUser
    return user.updateProfile({
    displayName: name,
    photoURL: avatar,
  })
}

