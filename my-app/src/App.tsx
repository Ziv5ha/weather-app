import React from 'react';
import { useSelector } from 'react-redux';
import CitiesOptions from './components/CitiesOptions';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <CitiesOptions />
      <Main />
    </div>
  );
}

export default App;
