const initialState = {
  error: false,
  errorMessage: ''
}

const forError = (state = initialState, action) => {
  if (action.type === 'CLEAR_ERROR') {
    return {...state, error: false, errorMessage: ''}
  } else if (action.type === 'SET_ERROR' && action.errorData.code) {
    let message
    switch (action.errorData.code) {
      case 'storage/object-not-found': 
        message = 'Объект не найден'
        break
      case 'storage/unauthenticated': 
        message = 'Похоже, ты не авторизирован. Войди в аккаунт и попробуй снова'
        break
      case 'storage/retry-limit-exceeded': 
        message = 'Операция выполняется слишком долго. Попробуй еще раз'
        break
      case 'storage/canceled': 
        message = 'Операция была отменена'
        break
      case 'storage/cannot-slice-blob': 
        message = 'Возникла проблема загрузки, попробуй еще раз'
        break
      case 'storage/retry-limit-exceeded': 
        message = 'Операция выполняется слишком долго. Попробуй еще раз'
        break
      case 'storage/invalid-argument':
        message= 'Файл не выбран'
        break
      default: message = 'Возникла неизвестная ошибка :('
    } 
    return {...state, error: action.errorData, errorMessage: message}
  } else if (action.type === 'SET_ERROR') {
    return {...state, error: action.errorData, errorMessage: 'Возникла неизвестная ошибка :('}
  } return state
}

export const setError = (errorData) => ({type: 'SET_ERROR', errorData})
export const clearError = () => ({type: 'CLEAR_ERROR'})

export default forError