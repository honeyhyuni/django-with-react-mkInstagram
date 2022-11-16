import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from 'pages';
import {BrowserRouter} from "react-router-dom";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
