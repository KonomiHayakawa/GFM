import { createStore, combineReducers, applyMiddleware } from 'redux'
import authReducer from './authReducer'
import foodCaloriesReducer from './foodCaloriesReducer'
import forError from './forError'
import userPersonalData from './userPersonalData'
import thunkMiddleware from 'redux-thunk'
import recipeConstructorReducer from './recipeConstructorReducer'

const reducers = combineReducers({
  authReducer,
  foodCaloriesReducer,
  forError,
  userPersonalData,
  recipeConstructorReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store