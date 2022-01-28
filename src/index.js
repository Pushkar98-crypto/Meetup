import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import  {FavrouiteContentProviders} from './store/Favourite-context';

ReactDOM.render(
  <React.StrictMode> 
    <FavrouiteContentProviders>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavrouiteContentProviders>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital