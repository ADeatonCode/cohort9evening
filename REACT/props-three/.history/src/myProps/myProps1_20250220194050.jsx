import React from 'react';
import ReactDom from 'react';

const welcome = 'Welcome to my REACT project!';
const fullName = {firstName: 'AC',  lastName: 'Deaton'};

// Building Functional Component

const Header = () => {
    return (
        <div>
            <h1>{welcome}</h1>
            <h2>My Full Name: {fullName.firstame} {fullName.lastName}</h2>
        </div>
    );
}

export default Header;
