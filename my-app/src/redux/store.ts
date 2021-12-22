import { configureStore } from '@reduxjs/toolkit';
import { fetchData } from './middleware';
import { weatherReducer } from './reducer';

export const store = configureStore({
  reducer: { weatherReducer },
  middleware: [fetchData],
});
