import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return <h1>welcome to react tutorials</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)