import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import MainPage from "../../pages/MainPage/MainPage";
import {getDataTest} from "../../utils/mocks";

const getData = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({}), 1000)
  })
}

const App = () => (
    <BrowserRouter>
    <MainPage getData={getDataTest}/>
    </BrowserRouter>
);

export default App;
