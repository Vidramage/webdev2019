import './sass/bootstrap/scss/bootstrap.scss';
import './sass/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

ReactDOM.render(
    <Home title="it has a title now" ></Home>,
    document.getElementById('root')
)