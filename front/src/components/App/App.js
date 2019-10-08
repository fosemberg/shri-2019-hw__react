import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import PageFileListContent from "../../pages/PageFileListContent/PageFileListContent";

const App = () => (
    <BrowserRouter>
    <PageFileListContent/>
    </BrowserRouter>
);

export default App;
