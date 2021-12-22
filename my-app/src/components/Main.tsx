import React from 'react';
import { useSelector } from 'react-redux';
import { Weather } from '../@types/types';
import { icons } from '../assests/iconDictionary';
import '../styling/main.css';

export default function Main() {
  const data = useSelector((state: Weather.State) => state.weatherReducer);
  console.log(data);
  return data.name ? (
    <main>
      <div className='background-icon'>{icons[data.weather[0].main]}</div>
      <h2 className='city-name'>{data.name}</h2>
      <h3 className='main-temp'>{data.main.temp}°C</h3>
      <p className='min-max-temp'>
        {data.main.temp_min}°C - {data.main.temp_max}°C
      </p>
      <div className='icon-div'>
        {icons[data.weather[0].main]}
        <p>{data.weather[0].description}</p>
      </div>
    </main>
  ) : (
    <main>
      <h2 className='empty'>Search A City</h2>
    </main>
  );
}
