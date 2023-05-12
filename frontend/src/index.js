import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import'./css/scss/components/index.css';
import './css/scss/global/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

