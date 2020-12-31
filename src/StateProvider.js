import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext();
//preparing the data

export const StateProvider = ({ reducer, initialState, children}) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>

);

//hook which allows us to pull info from data
export const useStateValue = () => useContext(StateContext);