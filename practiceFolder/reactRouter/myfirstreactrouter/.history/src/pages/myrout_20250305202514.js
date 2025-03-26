import react from 'react';
import { BrowserRouter, Router, Rout } from 'react-router-dom';

function MyFirstRoute() {
    return (
        <BrowserRouter>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Router>
        </BrowserRouter><h1>Hello, from MyFirstRoute!</h1>
    );
}