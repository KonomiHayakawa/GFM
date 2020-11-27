import firebase from '../firebase'

const storage = firebase.storage()
const storageRef = storage.ref()

export const getIngredient = (foodGroup, foodId) => {
  const ref = firebase.database().ref(`/ProductsCalories/productsGroups/${foodGroup}`)
  const promise = new Promise(function(resolve, reject) {
    ref.orderByChild('id').equalTo(foodId).on('child_added', function(snapshot) {
      resolve(snapshot.val())
    })
  })
  return promise
}

export const getRecipe = (userId, recipeId) => {
  const ref = firebase.database().ref(`UsersData/${userId}/savedRecipes`)
  const promise = new Promise(function(resolve, reject) {
    ref.orderByChild('id').equalTo(recipeId).on('child_added', function(snapshot) {
      resolve(snapshot.val())
    })
  })
  return promise
}

export const saveUserRecipes = (userId, recipes) => {
  return firebase.database().ref(`UsersData/${userId}/savedRecipes`).set(recipes)
}

export const addRecipeImg = (userId, imgFile, recipeId) => {
  const recipeImgRef = storageRef.child(`${userId}/recipes/${recipeId}.jpg`)
  return recipeImgRef.put(imgFile)
}

export const getRecipeImgLink = (userId, recipeId) => {
  return storageRef.child(`/${userId}/recipes/${recipeId}.jpg`).getDownloadURL()
}

export const getDefaultImgLink = () => {
  return storageRef.child(`default/defaultRecipeImg.png`).getDownloadURL()
}

export const deleteRecipeImg = (userId, recipeId) => {
  const imgToDelete = storageRef.child(`/${userId}/recipes/${recipeId}.jpg`)
  return imgToDelete.delete().then(function() {
  })
}