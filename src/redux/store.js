import { createStore, combineReducers, applyMiddleware } from "redux";
import foodCaloriesReducer from './foodCaloriesReducer'
import userPersonalData from './userPersonalData'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import recipeConstructorReducer from "./recipeConstructorReducer";
import forError from "./forError";

const reducers = combineReducers({
  foodCaloriesReducer,
  userPersonalData,
  authReducer,
  recipeConstructorReducer,
  forError,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store