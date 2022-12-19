import { ADDCOORDS, THROWERROR } from './types';

export const addCoords = coords => ({ type: ADDCOORDS, payload: coords });

export const throwError = msg => ({ type: THROWERROR, payload: msg });
