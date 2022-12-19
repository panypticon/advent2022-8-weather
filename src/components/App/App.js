import { useEffect, useContext } from 'react';

import getPromisifedCurrentLocation from '../../utils/getPromisifiedCurrentLocation';
import { AppContext } from '../../context/AppContext';

import './App.scss';

const App = () => {
    const { data, dispatch } = useContext(AppContext);

    console.log({ data, dispatch });

    useEffect(() => {
        (async () => {
            try {
                const pos = await getPromisifedCurrentLocation();
                console.log(pos);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return <div className="App"></div>;
};

export default App;
