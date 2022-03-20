import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "./components/InputField";
import ResultsList from "./components/ResultsList";

function App() {
    let results = {words: ['a', 'b', 'c']};
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="App-body">
                <InputField></InputField>
                <ResultsList results={results}></ResultsList>
            </div>
        </div>
    );
}

export default App;
