import React from 'react';

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <div className= 'header-wraper'>
            <h1>{welcome}</h1>
            <p>{fullName.firstName} {fullName.Lastname}</p>
            <p>This is a {props.level} level header</p>
            <p>This header has been created by {props.author}</p>
            </div>
            
        </header>
    )
}
