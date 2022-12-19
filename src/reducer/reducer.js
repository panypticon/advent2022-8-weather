import { ADDCOORDS, THROWERROR } from './types';

const reducer = (state, action) => {
    switch (action.type) {
        case ADDCOORDS:
            return { ...state, location: action.payload };
        case THROWERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default reducer;
