import { ADDCOORDS, ADDDATA, ADDLOCATION, THROWERROR } from './types';

export const addCoords = coords => ({ type: ADDCOORDS, payload: coords });

export const addData = data => ({ type: ADDDATA, payload: data });

export const addLocation = location => ({ type: ADDLOCATION, payload: location });

export const throwError = msg => ({ type: THROWERROR, payload: msg });
