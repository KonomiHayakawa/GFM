import {addUserData, getUserData, addDailyCalories, addDailyWater, addUserParameter, getAllUserInfo} from './../queries/queries'


const initialState = {
  mainData: {
    id: '',
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
  normalWeight: '',
}

const userPersonalData = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MAIN_DATA':
      return { ...state, mainData: {...state.mainData, id: action.uid, email:action.email, name: action.name, avatar: action.avatar} }
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
    // case 'SET_NORMAL_WEIGHT':
    //   return {...state, normalWeight: action.normalWeight};
    default: return state
  }
}

export const addMainData = (uid, email, name, avatar) => ({type: 'ADD_MAIN_DATA', uid, email, name, avatar})

export const updateUserData = (name, avatar) => (dispatch) => {
  addUserData(name, avatar)
  .then(() => getUserData())
  .then((userData) => dispatch(addMainData(userData.uid, userData.email, userData.displayName, userData.photoURL)))
}

export const setUserSex = (sex) => ({type: 'SET_USER_SEX', sex})
export const setUserWeight = (weight) => ({type: 'SET_USER_WEIGHT', weight})
export const setUserHeight = (height) => ({type: 'SET_USER_HEIGHT', height})
export const setUserAge = (age) => ({type: 'SET_USER_AGE', age})
export const setUserActivityType = (activityType) => ({type: 'SET_USER_ACTIVITY_TYPE', activityType})
export const setDailyCalories = (calories) => ({type: 'SET_DAILY_CALORIES', dailyCalories: calories})
export const setDailyWater = (water) => ({type: 'SET_DAILY_WATER', dailyWater: water})
// export const setNormalWeight = (normalWeight) => ({type: 'SET_NORMAL_WEIGHT', normalWeight})



// export const saveUserPhysicalData = (userId, sex, weight, height, age, activityType) => (dispatch) => {
//   dispatch(saveUserSex)
//   dispatch(saveUserWeight)
//   dispatch(saveUserHeight)
//   dispatch(saveUserAge)
//   dispatch(saveUserActivityType)
// }

// export const savePhysicalParameter = (userId, parameterType, parameter) => (dispatch) => {
//   addUserParameter(userId, parameterType, parameter).then(() => dispatch(setUserSex(parameter)))
// }

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
    .then(() => dispatch(setDailyCalories(calories)))
}
export const saveDailyWater = (userId, sex, weight, water) => (dispatch) => {
  addUserParameter(userId, 'dailyWater', water)
  .then(() => addUserParameter(userId, 'sex', sex))
  .then(() => addUserParameter(userId, 'weight', weight))
  .then(() => dispatch(setDailyWater(water)))
}

export const setAllUserInfo = (userId) => (dispatch) => {
  getAllUserInfo(userId).then((response => {
    if (response.val()) {
    dispatch(setUserSex(response.val().sex || null))
    dispatch(setUserWeight(response.val().weight || null))
    dispatch(setUserHeight(response.val().height || null))
    dispatch(setUserAge(response.val().age || null))
    dispatch(setUserActivityType(response.val().activityType || null ))
    dispatch(setDailyCalories(response.val().dailyCalories || null))
    dispatch(setDailyWater(response.val().dailyWater || null))
    // dispatch(setNormalWeight(response.val().NormalWeight.normalWeight))
    } 
  }))
}

export default userPersonalData