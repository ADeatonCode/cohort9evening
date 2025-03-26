import React from 'react';
import ReactDOM from 'react-dom';
import Car from './'

// const myElement =   <Car brand="Ford" />;

const root = ReactDOM.CreateRoot(document.getElementById('root'));
root.render(<React.StrictMode><Car brand="Ford" /></React.StrictMode>);
