import { createReducer } from '@reduxjs/toolkit';
import { getWeatherByCity } from './actions';

export const weatherReducer = createReducer({}, (builer) => {
  builer.addCase(getWeatherByCity, (state, action) => {
    return action.payload;
  });
});
