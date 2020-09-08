import firebase from './../firebase';


// user authentication 

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


// user personal data

export const addUserParameter = (userId, parameterName, parameter) => {
  let updates = {};
  updates[`UsersData/${userId}/${parameterName}`] = parameter;
  return firebase.database().ref().update(updates);
}

export const saveRecipe = (userId, recipe) => {
  return firebase.database().ref(`UsersData/${userId}/savedRecipes`).set(recipe)
}

export const getAllUserInfo = (userId) => {
  return firebase.database().ref(`/UsersData/${userId}`).once('value')
}





export const updateUserName = (name) => {
  const user = firebase.auth().currentUser
    return user.updateProfile({
    displayName: name,
  })
}

export const updateUserAvatar = (imgLink) => {
  const user = firebase.auth().currentUser
    return user.updateProfile({
      photoURL: imgLink,
  })
}




export const getUserData = () => {
  const user = firebase.auth().currentUser
  if (user != null) {
    return user.providerData[0]
    //   console.log("Sign-in provider: " + profile.providerId);
    //   console.log("  Provider-specific UID: " + profile.uid);
    //   console.log("  Name: " + profile.displayName);
    //   console.log("  Email: " + profile.email);
    //   console.log("  Photo URL: " + profile.photoURL);
  }
}

export const kek = (parameter) => {
let updates = {};
updates[`ProductsCalories/foodCategoriesData`] = parameter;
return firebase.database().ref().update(updates);
  // firebase.database().ref(`/productsCatalog/Alcohol`).set(option)
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

// Калькулятор калорий

export const getIngredient = (foodGroup, index) => {
  return firebase.database().ref(`/ProductsCalories/productsGroups/${foodGroup}/${index}`).once('value')
    .then((snapshot) => {return snapshot.val()})
}