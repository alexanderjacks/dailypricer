import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>this</code> asap.
          </p>
          <a
            className="App-link"
            href="https://."
            target="_blank"
            rel="noopener noreferrer"
          >
            Use React
          </a>
        </header>
      </div>
    );
  }
};
