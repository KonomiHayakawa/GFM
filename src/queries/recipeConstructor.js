import firebase from '../firebase'

const storage = firebase.storage()
const storageRef = storage.ref()

export const getIngredient = (foodGroup, index) => {
  return firebase.database().ref(`/ProductsCalories/productsGroups/${foodGroup}/${index}`).once('value')
    .then(snapshot => snapshot.val())
}

export const saveUserRecipes = (userId, recipes) => {
  return firebase.database().ref(`UsersData/${userId}/savedRecipes`).set(recipes)
}

export const addRecipeImg = (userId, imgFile, recipeTitle) => {
  const recipeImgRef = storageRef.child(`${userId}/recipes/${recipeTitle}.jpg`)
  return recipeImgRef.put(imgFile)
}

export const getRecipeImgLink = (userId, recipeTitle) => {
  return storageRef.child(`/${userId}/recipes/${recipeTitle}.jpg`).getDownloadURL()
}

export const getDefaultImgLink = () => {
  return storageRef.child(`default/defaultRecipeImg.png`).getDownloadURL()
}

// export const getRecipes = (userId, recipeTitle) => {
//   return firebase.database().ref(`/UsersData/${userId}/savedRecipes`).once('value')
// }

export const deleteRecipeImg = (userId, recipeTitle) => {
  const imgToDelete = storageRef.child(`/${userId}/recipes/${recipeTitle}.jpg`);
  return imgToDelete.delete().then(function() {
  }).catch(function(error) {
  });
}