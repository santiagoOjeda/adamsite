import React , {createContext, useContext, useReducer} from 'react';

// creo el contexto
export const UIcontext = createContext();

// creo initial state
const initialState = {
    submenu: false 
};

// creo el reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'toogleSubmenu':
        return {
            ...state,
            submenu: action.payload.submenu
        };
        
        default:
        return state;
    }
};

// custom hook
export const useUIcontextStateValue = () => useContext(UIcontext);

// necesito un provider
export const UIcontextProvider = ({children}) => {
    return (
        <UIcontext.Provider  value={useReducer(reducer, initialState)}>
            {children}
        </UIcontext.Provider>
    );
};



