import axios from 'utils/api'
import contextFactory from './contextFactory'
import { navigate } from 'utils/navigation'
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {...state, locations: [...state.locations, action.payload]}
    case 'ADD_CURRENT_LOCATION':
      return {...state, currentLocation: action.payload}
    case 'CHANGE_NAME':
      return {...state, name: action.payload}
    case 'FETCH_TRACKS':
      return {...state, tracks: action.payload}
    case 'RESET':
      return {...initialState}
    case 'START_RECORDING':
      return {...state, isRecording: true}
    case 'STOP_RECORDING':
      return {...state, isRecording: false}
    default:
      return state
  }
}

const addLocation = dispatch => (location, isRecording) => {
  dispatch({type: 'ADD_CURRENT_LOCATION', payload: location})
  if (isRecording) dispatch({type: 'ADD_LOCATION', payload: location })
}

const saveTrack = dispatch => (name, locations) => {
  axios.post('/tracks', {name, locations}).then(() => {
    navigate('TrackList')
    dispatch({type: 'RESET'})
  }).catch(err=> console.log(err))
}

const fetchTracks = dispatch => () => {
  axios.get('/tracks').then(res=> dispatch({type: 'FETCH_TRACKS', payload: res.data}))
}

const changeName = dispatch => name => dispatch({type: 'CHANGE_NAME', payload: name})

const startRecording = dispatch => () => {
  dispatch({type: 'START_RECORDING'})

}
const stopRecording = dispatch => () => {
  dispatch({type: 'STOP_RECORDING'})
}

const reset = dispatch => () => {
console.log("dispatch")
  
  dispatch({type: 'RESET'})
}

const initialState = {name: '', isRecording: false, locations: [], currentLocation: null}

export const { Provider, useCurrentContext: useTrackContext } = contextFactory(reducer, 
  {addLocation, changeName, fetchTracks, reset, saveTrack, startRecording, stopRecording}, 
  initialState)

export default Provider