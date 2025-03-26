import react from 'react';
import reactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

function app {
    return (
        <Router>
            <h1>Hello from React Router</h1>
        </Router>
    );
}

reactDom.render(<App />, document.getElementById('root'));

// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  