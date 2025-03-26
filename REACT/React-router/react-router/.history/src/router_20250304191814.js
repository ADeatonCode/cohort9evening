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
