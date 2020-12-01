import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store

