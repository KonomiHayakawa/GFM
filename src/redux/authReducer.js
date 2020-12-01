import {authentication, registration, logout} from './../queries/auth'
import {clearUserPersonalData} from './userPersonalData'

const initialState = {
  isSignedIn: false,
  userId: null,
  userEmail: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {...state, isSignedIn: action.isSignedIn, userId: action.userId, userEmail: action.userEmail}
    default: return state
  }
}

export const setUserData = (isSignedIn, userId, userEmail) => ({type: 'SET_USER_DATA', isSignedIn, userId, userEmail})

export const login = (email, password) => (dispatch) => {
  return authentication(email, password)
    .then(response => {
      dispatch(setUserData(true, response.user.uid, email))
    })
}

export const signUp = (email, password) => (dispatch) => {
  return registration(email, password)
    .then(response => {
      dispatch(setUserData(true, response.user.uid, email))
    })
}

export const signOut = () => (dispatch) => {
  logout()
  dispatch(setUserData(false, null, null))
  dispatch(clearUserPersonalData())
}

export default authReducer