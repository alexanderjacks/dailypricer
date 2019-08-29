import React from 'react';
import { Header } from 'semantic-ui-react';
import logo from './logo.png';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="dailypricer logo" />
          <p>
            We use <code>AWS</code> as much as we can
          </p>
          <a
            className="App-link"
            href="https://."
            target="_blank"
            rel="noopener noreferrer"
          >
            React is the new HTML
          </a>
        </Header>
      </div>
    );
  }
};
