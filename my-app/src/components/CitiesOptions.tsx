import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherByCity } from '../redux/actions';
import '../styling/search.css';

export default function CitiesOptions() {
  const dispatch = useDispatch();
  const InputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className='search'
      onSubmit={(e) => {
        e.preventDefault();
        if (!InputRef.current || !InputRef.current.value) return;
        dispatch(getWeatherByCity({ name: InputRef.current.value }));
      }}
    >
      <input className='search-input' ref={InputRef} />
      <button className='seatch-btn' type='submit'>
        Search
      </button>
    </form>
  );
}
