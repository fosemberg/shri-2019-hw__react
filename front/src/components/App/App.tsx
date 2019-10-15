import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import getData from '../../store/getData';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <MainPage getData={getData} />
  </BrowserRouter>
);

export default App;
