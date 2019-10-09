import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import MainPage from "../../pages/MainPage/MainPage";
import {getDataTest} from "../../utils/mocks";

const getData = (url) => {
  console.log(url);
  const _url = `http://localhost:3009/api/repos/server-info${url}`;
  // return fetch(`${host}/${pathToFiles}/`)
  return fetch(`${_url}`).then(res => res.json());

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve({}), 1000)
  // })
}

const App = () => (
    <BrowserRouter>
    <MainPage getData={getData}/>
    </BrowserRouter>
);

export default App;
