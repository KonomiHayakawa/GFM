import {addUserParameter, getAllUserInfo, updateUserName, updateAvatar, getUserData} from './../queries/personalData'

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
      return {...state, mainData: {...state.mainData, name: action.name}}
    case 'SET_AVATAR':
      return {...state, mainData: {...state.mainData, avatar: action.avatar}}
    case 'SET_USER_SEX':
      return {...state, sex: action.sex}
    case 'SET_USER_WEIGHT':
      return {...state, weight: action.weight}
    case 'SET_USER_HEIGHT':
      return {...state, height: action.height}
    case 'SET_USER_AGE':
      return {...state, age: action.age}
    case 'SET_USER_ACTIVITY_TYPE':
      return {...state, activityType: action.activityType}
    case 'SET_DAILY_CALORIES': 
      return {...state, dailyCalories: action.dailyCalories}
    case 'SET_DAILY_WATER':
      return {...state, dailyWater: action.dailyWater}
    case 'SET_BODY_MASS_INDEX':
      return {...state, bodyMassIndex: action.bodyMassIndex}
    case 'SET_RECIPE':
      return {...state, savedRecipes: [...state.savedRecipes, ...action.recipe]}
    case 'UPDATE_RECIPES':
      return {...state, savedRecipes: [...action.recipes]}
    case 'CLEAR_USER_PERSONAL_DATA':
      return initialState
    default: return state
  }
}

// action creators
export const setName = (name) => ({type: 'SET_NAME', name})
export const setAvatar = (avatar) => ({type: 'SET_AVATAR', avatar})
export const setUserSex = (sex) => ({type: 'SET_USER_SEX', sex})
export const setUserWeight = (weight) => ({type: 'SET_USER_WEIGHT', weight})
export const setUserHeight = (height) => ({type: 'SET_USER_HEIGHT', height})
export const setUserAge = (age) => ({type: 'SET_USER_AGE', age})
export const setUserActivityType = (activityType) => ({type: 'SET_USER_ACTIVITY_TYPE', activityType})
export const setDailyCalories = (calories) => ({type: 'SET_DAILY_CALORIES', dailyCalories: calories})
export const setDailyWater = (water) => ({type: 'SET_DAILY_WATER', dailyWater: water})
export const setBodyMassIndex = (bodyMassIndex) => ({type: 'SET_BODY_MASS_INDEX', bodyMassIndex})
export const setRecipe = (recipe) => ({type: 'SET_RECIPE', recipe})
export const updateRecipes = (recipes) => ({type: 'UPDATE_RECIPES', recipes})
export const clearUserPersonalData = () => ({type: 'CLEAR_USER_PERSONAL_DATA'}) 

// thunk

export const saveName = (name) => (dispatch) => updateUserName(name).then(() => dispatch(setName(name)))

export const saveAvatar = (avatarLink) => (dispatch) => updateAvatar(avatarLink).then(() => dispatch(setAvatar(avatarLink)))

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

export const saveDailyCalories = (userId, sex, weight, height, age, activityType, calories) => (dispatch) => {
  return addUserParameter(userId, 'dailyCalories', calories)
    .then(() => addUserParameter(userId, 'sex', sex))
    .then(() => addUserParameter(userId, 'weight', weight))
    .then(() => addUserParameter(userId, 'height', height))
    .then(() => addUserParameter(userId, 'age', age))
    .then(() => addUserParameter(userId, 'activityType', activityType))
    .then(() => dispatch(setUserSex(sex)))
    .then(() => dispatch(setUserWeight(weight)))
    .then(() => dispatch(setUserHeight(height)))
    .then(() => dispatch(setUserAge(age)))
    .then(() => dispatch(setUserActivityType(activityType)))
    .then(() => dispatch(setDailyCalories(calories)))
}
export const saveDailyWater = (userId, sex, weight, water) => (dispatch) => {
  addUserParameter(userId, 'dailyWater', water)
  .then(() => addUserParameter(userId, 'sex', sex))
  .then(() => addUserParameter(userId, 'weight', weight))
  .then(() => dispatch(setUserSex(sex)))
  .then(() => dispatch(setUserWeight(weight)))
  .then(() => dispatch(setDailyWater(water)))
}

export const saveBodyMassIndex = (userId, weight, height, bodyMassIndex) => (dispatch) => {
  addUserParameter(userId, 'bodyMassIndex', bodyMassIndex)
  .then(() => addUserParameter(userId, 'weight', weight))
  .then(() => addUserParameter(userId, 'height', height))
  .then(() => dispatch(setUserWeight(weight)))
  .then(() => dispatch(setUserHeight(height)))
  .then(() => dispatch(setBodyMassIndex(bodyMassIndex)))
}

export const setAllUserInfo = (userId) => (dispatch) => {
  getAllUserInfo(userId)
    .then((response => {
      if (response.val()) {
        response.val().sex  && dispatch(setUserSex(response.val().sex))
        response.val().weight && dispatch(setUserWeight(response.val().weight))
        response.val().height && dispatch(setUserHeight(response.val().height))
        response.val().age && dispatch(setUserAge(response.val().age))
        response.val().activityType && dispatch(setUserActivityType(response.val().activityType))
        response.val().dailyCalories && dispatch(setDailyCalories(response.val().dailyCalories))
        response.val().dailyWater && dispatch(setDailyWater(response.val().dailyWater))
        response.val().bodyMassIndex && dispatch(setBodyMassIndex(response.val().bodyMassIndex))
        response.val().savedRecipes && dispatch(setRecipe(response.val().savedRecipes))
        // console.log(...response.val().savedRecipes) 
      }
    }))
    .then(() => getUserData())
    .then((mainData) => {
      dispatch(setName(mainData.displayName))
      dispatch(setAvatar(mainData.photoURL))
    })

}

export default userPersonalData