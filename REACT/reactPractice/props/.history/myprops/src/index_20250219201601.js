import React from 'react';
import ReactDOM from 'react-dom';
import Car from './cars';

const myElement =   <Car brand="Ford" />;

const root = ReactDOM.CreateRoot(document.getElementById('root'));
root.render(<myElement brand="Ford" />);
