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
// let updates = {};
// updates['UsersData/' + userId + '/sex'] = sex;
// updates['UsersData/' + userId + '/height'] = height;
// updates['UsersData/' + userId + '/weight'] = weight;
// updates['UsersData/' + userId + '/age'] = age;
// updates['UsersData/' + userId + '/dailyActivity'] = dailyActivity;
// return firebase.database().ref().update(updates);
}

export const addDailyCalories = (userId, dailyCalories) => {
  let updates = {};
  updates['UsersData/' + userId + '/dailyCalories'] = dailyCalories;
  return firebase.database().ref().update(updates);
}

export const addDailyWater = (userId, dailyWater) => {
  let updates = {};
  updates['UsersData/' + userId + '/dailyWater'] = dailyWater;
  return firebase.database().ref().update(updates);
}


export const kek = (parameter) => {
  // firebase.database().ref(`/productsCatalog/Alcohol`).set(option)
  let updates = {};
updates[`ProductsCalories/foodCategoriesData`] = parameter;
return firebase.database().ref().update(updates);
}

export const addUserData = (name, avatar) => {
  const user = firebase.auth().currentUser
    return user.updateProfile({
    displayName: name,
    photoURL: avatar,
  })
}

export const addUserParameter = (userId, parameterName, parameter) => {
  let updates = {};
  updates[`UsersData/${userId}/${parameterName}`] = parameter;
  return firebase.database().ref().update(updates);
}

export const getAllUserInfo = (userId) => {
  return firebase.database().ref(`/UsersData/${userId}`).once('value')
}

// Страница калорийности продуктов

export const getFoodGroupsData = () => {
  return firebase.database().ref(`/ProductsCalories/foodCategoriesData`).once('value')
  .then((snapshot) => {return snapshot.val()})
  // .then((snapshot) => console.log(snapshot.val()))
}

export const getFoodGroup = (groupName) => {
  return firebase.database().ref(`/ProductsCalories/productsGroups/${groupName}`).once('value')
  .then((snapshot) => {return snapshot.val()})
}