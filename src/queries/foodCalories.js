import firebase from './../firebase'

export const getFoodGroupsData = () => {
  return firebase.database().ref(`/ProductsCalories/foodCategoriesData`).once('value')
  .then((snapshot) => snapshot.val())
  // .then((snapshot) => console.log(snapshot.val()))
}

export const getFoodGroup = (groupName) => {
  return firebase.database().ref(`/ProductsCalories/productsGroups/${groupName}`).once('value')
  .then((snapshot) => snapshot.val())
}