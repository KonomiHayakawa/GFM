import { createStore, combineReducers, applyMiddleware } from "redux";
import menuReducer from './menuReducer'
import productsCaloriesReducer from './productsCaloriesReducer'
import userPersonalData from './userPersonalData'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import calculatorsReducer from './calculatorsReducer'

const reducers = combineReducers({
  menuReducer,
  productsCaloriesReducer,
  userPersonalData,
  authReducer,
  calculatorsReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store