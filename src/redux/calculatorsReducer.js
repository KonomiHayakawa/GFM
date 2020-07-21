import {addDailyCalories} from './../queries/queries'

const initialState = {
  dailyCalories: null,
}

const calculatorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DAILY_CALORIES': 
      return {...state, dailyCalories: action.dailyCalories}
    default: return state
  }
}

export const setDailyCalories = (calories) => ({type: 'SET_DAILY_CALORIES', dailyCalories: calories})

export const saveDailyCalories = (userId, calories) => (dispatch) => {
  addDailyCalories(userId, calories).then(() => dispatch(setDailyCalories(calories)))
}

export default calculatorsReducer

