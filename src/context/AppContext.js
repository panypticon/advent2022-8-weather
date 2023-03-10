import { createContext, useReducer } from 'react';

import reducer from '../reducer/reducer';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        coords: null,
        location: null,
        data: null,
        error: null
    };

    const [data, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ data, dispatch }}>{children}</AppContext.Provider>;
};

export default AppProvider;
