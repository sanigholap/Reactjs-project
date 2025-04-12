import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Correct import of the App component
import './index.css';  // Optional global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);