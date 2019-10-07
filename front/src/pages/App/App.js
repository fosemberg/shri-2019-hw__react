import React from 'react';
import './App.scss';
import PageFileListContent from "../PageFileListContent/PageFileListContent";
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
    <PageFileListContent/>
    </BrowserRouter>
);

export default App;
