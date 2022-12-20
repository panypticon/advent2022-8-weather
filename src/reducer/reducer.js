import { ADDCOORDS, ADDDATA, ADDLOCATION, THROWERROR } from './types';

const reducer = (state, action) => {
    switch (action.type) {
        case ADDCOORDS:
            return { ...state, coords: action.payload };
        case ADDDATA:
            return { ...state, data: action.payload };
        case ADDLOCATION:
            return { ...state, location: action.payload };
        case THROWERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default reducer;
