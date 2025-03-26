import React from 'react';
import ReactDOM from 'react-dom';

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}

const myElement =   <Car brand="Ford" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>myElement);

