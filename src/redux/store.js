import { createStore, combineReducers } from "redux";
import menuReducer from './menuReducer'
import productsCaloriesReducer from './productsCaloriesReducer'
import userPersonalData from './userPersonalData'

const reducers = combineReducers({
  menuReducer,
  productsCaloriesReducer,
  userPersonalData,
})

let store = createStore(reducers)


export default store