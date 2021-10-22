import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import AppMain from "./App";


ReactDOM.render(
        <React.StrictMode>
                <AppMain/>
        </React.StrictMode> ,
        document.getElementById('root')
    );

window.store = store

reportWebVitals();
