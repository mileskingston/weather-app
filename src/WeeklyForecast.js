import React from 'react';
import Forecast from './Forecast';
import WeatherContext from './WeatherContext';

import './WeeklyForecast.scss';

const WeeklyForecast = () => (
  <div className="weekly-forecast">
    <WeatherContext.Consumer>
      {(value) =>
        value.map((forecast, i) => (
          <Forecast key={i} weather={forecast.weather[0]} />
        ))
      }
    </WeatherContext.Consumer>
  </div>
);

export default WeeklyForecast;
