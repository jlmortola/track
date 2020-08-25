import { AsyncStorage } from 'react-native'
import axios from 'utils/api'
import contextFactory from './contextFactory'
import { navigate } from 'utils/navigation'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR': 
      return {...state, errorMessage: action.payload}
    case 'CLEAR_ERROR_MESSAGE':
      return {...state, errorMessage: ''}
    case 'SIGNIN':
      return {...state, errorMessage: '', token: action.payload.token}
    case 'SIGNOUT':
      return {token: null, errorMessage: ''}
    default:
      return state
  }
}

const clearErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_ERROR_MESSAGE'})

const checkLocalAuth = (dispatch) => () => {
  const token = AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'SIGNIN', payload:{ token }})
    return navigate('TrackList')
  }
  return navigate('loginFlow')
}

const signup = dispatch => ({email, password}) => {  
  axios.post('/signup', {email, password})
  .then(res => {
    AsyncStorage.setItem('token', res.data.token)
    dispatch({ type: 'SIGNIN', payload:{ token: res.data.token }})
    navigate('TrackList')
  })
  .catch(err => dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' }))
}

const signin = dispatch => ({email, password}) => {
  axios.post('/signin', {email, password})
  .then(res => {
    AsyncStorage.setItem('token', res.data.token)
    dispatch({ type: 'SIGNIN', payload:{ token: res.data.token }})
    navigate('TrackList')
  })
  .catch(err => dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' }))
}

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({type: 'SIGNOUT'})
  navigate('loginFlow')
}


export const { Provider, useCurrentContext: useAuthContext } = contextFactory(reducer, 
  {checkLocalAuth, clearErrorMessage, signup, signin, signout}, 
  {token: null, errorMessage: ''})

export default Provider