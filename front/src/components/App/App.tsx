import React from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import MainPage from "../../pages/MainPage/MainPage";
import getData from "../../store/getData";

const App = () => (
  <BrowserRouter>
    <MainPage getData={getData}/>
  </BrowserRouter>
);

export default App;
