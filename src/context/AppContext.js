import { createContext, useReducer } from 'react';

import reducer from '../reducer/reducer';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        location: null,
        data: null
    };

    const [data, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ data, dispatch }}>{children}</AppContext.Provider>;
};

export default AppProvider;
