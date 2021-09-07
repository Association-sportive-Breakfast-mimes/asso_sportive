import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";
// fichier par lequel on a accès à l'application

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);