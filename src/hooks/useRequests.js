import { useEffect, useState } from 'react';

import { addLocation, addData, throwError } from '../reducer/actions';

const useRequests = async (coords, dispatch) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!coords) return;
        (async () => {
            try {
                setIsLoading(true);
                const weatherRes = await fetch(
                    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${coords.latitude},${coords.longitude}&days=7&aqi=no&alerts=no`
                );
                if (!weatherRes.ok) throw new Error('Weather request failed');
                const weatherData = await weatherRes.json();
                dispatch(addLocation(weatherData.location));
                dispatch(addData(weatherData.forecast.forecastday));
                setIsLoading(false);
            } catch (err) {
                dispatch(throwError(err.message));
            }
        })();
    }, [coords, dispatch]);

    return { isLoading };
};

export default useRequests;
