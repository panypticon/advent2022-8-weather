import { useEffect, useContext } from 'react';

import getPromisifedCurrentLocation from '../../utils/getPromisifiedCurrentLocation';
import { AppContext } from '../../context/AppContext';
import { addCoords, throwError } from '../../reducer/actions';
import useRequests from '../../hooks/useRequests';
import Day from '../Day/Day';

import './App.scss';

const App = () => {
    const { data, dispatch } = useContext(AppContext);

    console.log({ data, dispatch });

    const dataLoaded = data.location && data.data;

    // Direct async errors to ErrorBoundary
    useEffect(() => {
        if (data.error) throw new Error(data.error);
    }, [data.error]);

    // Get geolocation coords
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

    // Trigger requests
    const { isLoading } = useRequests(data.coords, dispatch);

    return (
        <main className="App">
            {isLoading ? (
                <h1>Loading…</h1>
            ) : dataLoaded ? (
                <>
                    <h1>Weather for {data.location.name}</h1>
                    {data.data.map(day => (
                        <Day data={day} />
                    ))}
                </>
            ) : (
                <></>
            )}
        </main>
    );
};

export default App;
