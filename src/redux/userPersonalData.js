import {addUserData, getUserData} from './../queries/queries'

const initialState = {
  mainData: {
    id: '',
    email: '',
    name: '',
    avatar: '',
  },
  dailyCaloriesInfo: {
    sex: '',
    weight: '',
    height: '',
    age: '',
    activityType: '',
    dailyCalories: '',
  },
  dailyWaterInfo: {},
  normalWeightInfo: {},
}

const userPersonalData = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MAIN_DATA':
      return { ...state, mainData: {...state.mainData, id: action.uid, email:action.email, name: action.name, avatar: action.avatar} }
    // case 'ADD_DAILY_CALORIES_INFO':
    //   return state
    default: return state
  }
}

// export const addDailyCaloriesInfo = () => ({type: 'ADD_DAILY_CALORIES_INFO'})

export const addMainData = (uid, email, name, avatar) => ({type: 'ADD_MAIN_DATA', uid, email, name, avatar})

export const updateUserData = (name, avatar) => (dispatch) => {
  addUserData(name, avatar)
  .then(() => getUserData())
  .then((userData) => dispatch(addMainData(userData.uid, userData.email, userData.displayName, userData.photoURL)))
}
 
export default userPersonalData