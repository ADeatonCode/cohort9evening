import REACT from 'react';
import ReactDom from 'react-dom';

functon CaretPosition(props) {
    return <h2>I am a { props.brand }!</h2>;
}

const myElement =   <Car brand="Ford" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

