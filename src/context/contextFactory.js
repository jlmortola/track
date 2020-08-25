import React, { createContext, useContext, useReducer } from 'react'

export default (reducer, actions = {}, initialState = []) => {
  const Context = createContext()
  
  const useCurrentContext = () => useContext(Context)
  
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const boundedAction = {}
    Object.keys(actions).forEach(key => boundedAction[key] = actions[key](dispatch))
  
    const value = {
      state, 
      ...boundedAction
    }
  
    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    )
  }

  return { Provider, useCurrentContext }
}
