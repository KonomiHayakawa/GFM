const initialState = {
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
    case 'ADD_DAILY_CALORIES_INFO':
      return state
    default: return state
  }
}

export const addDailyCaloriesInfo = () => ({type: 'ADD_DAILY_CALORIES_INFO'})

export default userPersonalData