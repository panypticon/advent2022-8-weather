import { useState, useEffect } from 'react';

import iconMapping from '../../utils/iconMapping';

import './Day.scss';

import lowIcon from '../../assets/low.svg';
import precipitationIcon from '../../assets/precipitation.svg';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Day = ({
    data: {
        date,
        date_epoch,
        day: {
            condition: { code: condition },
            maxtemp_c: high,
            mintemp_c: low,
            daily_chance_of_rain: chanceOfRain
        }
    }
}) => {
    const parsedDate = new Date(date);
    const iconName = iconMapping[condition];

    const [icon, setIcon] = useState(null);

    useEffect(() => {
        (async () => {
            const { default: img } = await import(`../../assets/${iconName}.svg`);
            setIcon(img);
        })();
    }, [iconName]);

    return (
        <article className="Day" key={date_epoch}>
            <section className="Day__date">
                <div className="Day__date-day">{weekdays[parsedDate.getDay()]}</div>
                <div className="Day__date-date">{parsedDate.getDate()}</div>
            </section>
            <section className={`Day__weather Day__weather--${iconName}`}>
                <div className="Day__weather-icon">{icon && <img src={icon} alt={iconName} />}</div>
                <div className="Day__weather-high">{Math.round(high)}°</div>
                <div className="Day__weather-chanceofrain">
                    <img src={precipitationIcon} alt="Precipitation icon" />
                    <span>{chanceOfRain}%</span>
                </div>
                <div className="Day__weather-low">
                    <img src={lowIcon} alt="low icon" />
                    <span>{Math.round(low)}°</span>
                </div>
            </section>
        </article>
    );
};

export default Day;
