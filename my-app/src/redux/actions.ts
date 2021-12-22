import { createAction } from '@reduxjs/toolkit';
import { ReduxTypes, Weather } from '../@types/types';

export const getWeatherByCity = createAction<ReduxTypes.Payload>('GET_WEATHER');
