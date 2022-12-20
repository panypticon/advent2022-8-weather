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

    return (
        <article className="Day" key={date_epoch}>
            <section className="Day__date">
                <span className="Day__date-day">{weekdays[parsedDate.getDay()]}</span>
                <span className="Day__date-date">{parsedDate.getDate()}</span>
            </section>
            <section className="Day__weather">
                <div className="Day__weather-img"></div>
                <div className="Day__weather-high">{Math.round(high)}°</div>
                <div className="Day__weather-low">{Math.round(low)}°</div>
                <div className="Day__weather-chanceofrain">{chanceOfRain}%</div>
            </section>
        </article>
    );
};

export default Day;
