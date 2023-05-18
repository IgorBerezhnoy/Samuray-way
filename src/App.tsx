import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
};
const Header = () => {
    return (<div>
        <a href="">Home </a>
        <a href="">News Feed </a>
        <a href="">Messages </a>
    </div>);
};
const Technologies = () => {
    return (
        <ul>
            <li>SSC</li>
            <li>HTML</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    );
};

export default App;
