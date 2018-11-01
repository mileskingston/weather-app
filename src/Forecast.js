import React from 'react';

import './Forecast.scss';

const Forecast = ({ weather }) => (
  <div className="forecast">
    {weather.description}
    <i className={`forecast-icon icon-${weather.id}`} />
  </div>
)

export default Forecast;