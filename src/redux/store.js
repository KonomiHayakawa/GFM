import { createStore, combineReducers, applyMiddleware } from "redux";
import menuReducer from './menuReducer'
import foodCaloriesReducer from './foodCaloriesReducer'
import userPersonalData from './userPersonalData'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import recipeConstructorReducer from "./recipeConstructorReducer";

const reducers = combineReducers({
  menuReducer,
  foodCaloriesReducer,
  userPersonalData,
  authReducer,
  recipeConstructorReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store
