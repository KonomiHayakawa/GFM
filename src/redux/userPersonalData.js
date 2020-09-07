import {addUserParameter, getAllUserInfo, updateUserName, updateUserAvatar, getUserData} from './../queries/queries'


const initialState = {
  mainData: {
    email: '',
    name: '',
    avatar: '',
  },
  sex: '',
  weight: '',
  height: '',
  age: '',
  activityType: '',
  dailyCalories: '',
  dailyWater: '',
  bodyMassIndex: '',
  savedRecipes: [],
}

const userPersonalData = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, mainData: {...state.mainData, name: action.name}};
    case 'SET_AVATAR':
      return {...state, mainData: {...state.mainData, avatar: action.avatar}};
    // case 'SET_EMAIL':
    //   return {...state, mainData: {...state.mainData, email: action.email}};
    case 'SET_USER_SEX':
      return {...state, sex: action.sex};
    case 'SET_USER_WEIGHT':
      return {...state, weight: action.weight};
    case 'SET_USER_HEIGHT':
      return {...state, height: action.height};
    case 'SET_USER_AGE':
      return {...state, age: action.age};
    case 'SET_USER_ACTIVITY_TYPE':
      return {...state, activityType: action.activityType};
    case 'SET_DAILY_CALORIES': 
      return {...state, dailyCalories: action.dailyCalories};
    case 'SET_DAILY_WATER':
      return {...state, dailyWater: action.dailyWater};
    case 'SET_BODY_MASS_INDEX':
      return {...state, bodyMassIndex: action.bodyMassIndex};
    case 'SET_RECIPE':
      return {...state, savedRecipes: [...state.savedRecipes, action.recipe]}
    default: return state
  }
}

export const setName = (name) => ({type: 'SET_NAME', name})
export const setAvatar = (avatar) => ({type: 'SET_AVATAR', avatar})

export const setRecipe = (recipe) => ({type: 'SET_RECIPE', recipe})



export const saveName = (name) => (dispatch) => {
  updateUserName(name).then(() => dispatch(setName(name)))
}

export const saveAvatar = (avatar) => (dispatch) => {
  updateUserAvatar(avatar).then(() => dispatch(setAvatar(avatar)))
}

// export const updateUserData = (name, avatar) => (dispatch) => {
//   updateUserData(name, avatar)
//   .then(() => getUserData())
//   .then((userData) => dispatch(addMainData(userData.email, userData.displayName, userData.photoURL)))
// }

export const setUserSex = (sex) => ({type: 'SET_USER_SEX', sex})
export const setUserWeight = (weight) => ({type: 'SET_USER_WEIGHT', weight})
export const setUserHeight = (height) => ({type: 'SET_USER_HEIGHT', height})
export const setUserAge = (age) => ({type: 'SET_USER_AGE', age})
export const setUserActivityType = (activityType) => ({type: 'SET_USER_ACTIVITY_TYPE', activityType})
export const setDailyCalories = (calories) => ({type: 'SET_DAILY_CALORIES', dailyCalories: calories})
export const setDailyWater = (water) => ({type: 'SET_DAILY_WATER', dailyWater: water})
export const setBodyMassIndex = (bodyMassIndex) => ({type: 'SET_BODY_MASS_INDEX', bodyMassIndex})



export const saveUserSex = (userId, sex) => (dispatch) => {
  return addUserParameter(userId, 'sex', sex).then(() => dispatch(setUserSex(sex)))
}

export const saveUserWeight = (userId, weight) => (dispatch) => {
  addUserParameter(userId, 'weight', weight).then(() => dispatch(setUserWeight(weight)))
}

export const saveUserHeight = (userId, height) => (dispatch) => {
  addUserParameter(userId, 'height', height).then(() => dispatch(setUserHeight(height)))
}

export const saveUserAge = (userId, age) => (dispatch) => {
  addUserParameter(userId, 'age', age).then(() => dispatch(setUserAge(age)))
}

export const saveUserActivityType = (userId, activityType) => (dispatch) => {
  addUserParameter(userId, 'activityType', activityType).then(() => dispatch(setUserActivityType(activityType)))
}

// export const saveBodyMassIndex = (userId, bodyMassIndex) => (dispatch) => {
//   addUserParameter(userId, 'bodyMassIndex', bodyMassIndex).then(() => dispatch(setBodyMassIndex(bodyMassIndex)))
// }

export const saveDailyCalories = (userId, sex, weight, height, age, activityType, calories) => (dispatch) => {
  return addUserParameter(userId, 'dailyCalories', calories)
    .then(() => addUserParameter(userId, 'sex', sex))
    .then(() => addUserParameter(userId, 'weight', weight))
    .then(() => addUserParameter(userId, 'height', height))
    .then(() => addUserParameter(userId, 'age', age))
    .then(() => addUserParameter(userId, 'activityType', activityType))
    .then(() => dispatch(setDailyCalories(calories)))
}
export const saveDailyWater = (userId, sex, weight, water) => (dispatch) => {
  addUserParameter(userId, 'dailyWater', water)
  .then(() => addUserParameter(userId, 'sex', sex))
  .then(() => addUserParameter(userId, 'weight', weight))
  .then(() => dispatch(setDailyWater(water)))
}

export const saveBodyMassIndex = (userId, weight, height, bodyMassIndex) => (dispatch) => {
  addUserParameter(userId, 'bodyMassIndex', bodyMassIndex)
  .then(() => addUserParameter(userId, 'weight', weight))
  .then(() => addUserParameter(userId, 'height', height))
  .then(() => dispatch(setBodyMassIndex(bodyMassIndex)))
}

// export const setAllUserInfo = (userId) => (dispatch) => {
//   getAllUserInfo(userId).then((response => {
//     if (response.val()) {
//     dispatch(setUserSex(response.val().sex || null))
//     dispatch(setUserWeight(response.val().weight || null))
//     dispatch(setUserHeight(response.val().height || null))
//     dispatch(setUserAge(response.val().age || null))
//     dispatch(setUserActivityType(response.val().activityType || null ))
//     dispatch(setDailyCalories(response.val().dailyCalories || null))
//     dispatch(setDailyWater(response.val().dailyWater || null))
//     dispatch(setBodyMassIndex(response.val().bodyMassIndex))
//     } 
//   }))
// }

export const setAllUserInfo = (userId) => (dispatch) => {
  getAllUserInfo(userId)
    .then((response => {
      if (response.val()) {
        dispatch(setUserSex(response.val().sex || null))
        dispatch(setUserWeight(response.val().weight || null))
        dispatch(setUserHeight(response.val().height || null))
        dispatch(setUserAge(response.val().age || null))
        dispatch(setUserActivityType(response.val().activityType || null ))
        dispatch(setDailyCalories(response.val().dailyCalories || null))
        dispatch(setDailyWater(response.val().dailyWater || null))
        dispatch(setBodyMassIndex(response.val().bodyMassIndex))
      } 
    }))
    .then(() => getUserData())
    .then((mainData) => {
      dispatch(setName(mainData.displayName))
      dispatch(setAvatar(mainData.photoURL))
    })
}

export default userPersonalData