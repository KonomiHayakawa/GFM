const initialState = {
  errorMessage: ''
}

const forError = (state = initialState, action) => {
  switch (action) {
    case 'SET_ERROR': 
      return {...state, errorMessage: action.error}
    default: return state
  }
}

export const setError = (error) => ({type: 'SET_ERROR', error})

export default forError