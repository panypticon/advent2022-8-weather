import { useEffect, useContext } from 'react';

import getPromisifedCurrentLocation from '../../utils/getPromisifiedCurrentLocation';
import { AppContext } from '../../context/AppContext';
import { addCoords, throwError } from '../../reducer/actions';

import './App.scss';

const App = () => {
    const { data, dispatch } = useContext(AppContext);

    console.log({ data, dispatch });

    // Direct async errors to ErrorBoundary
    useEffect(() => {
        if (data.error) throw new Error(data.error);
    }, [data.error]);

    // Get geolocation
    useEffect(() => {
        (async () => {
            try {
                const {
                    coords: { latitude, longitude }
                } = await getPromisifedCurrentLocation();

                dispatch(addCoords({ latitude, longitude }));
            } catch (err) {
                dispatch(throwError('Not allowed to access location'));
            }
        })();
    }, [dispatch]);

    return <div className="App"></div>;
};

export default App;
