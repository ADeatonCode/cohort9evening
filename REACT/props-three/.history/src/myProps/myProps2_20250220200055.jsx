import React from 'react';

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <div cl
            <h1>Welcome to {props.title}</h1>
            <p>{props.subtitle}</p>
            <p>This is a {props.level} level header</p>
            <p>This header has been created by {props.author}</p>
        </header>
    )
}
