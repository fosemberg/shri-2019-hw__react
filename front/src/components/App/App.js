import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import MainPage from "../../pages/MainPage/MainPage";

const App = () => (
    <BrowserRouter>
    <MainPage/>
    </BrowserRouter>
);

export default App;
