import './App.css';
import logo from './logo.png';
import React from 'react';
import { Header } from 'semantic-ui-react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);

class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="dailypricer logo" />
          <p>
            Dailypricer runs on as much <code>AWS</code> as possible
          </p>
          <a
            className="App-link"
            href="https://j4cks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Architected &c by Jacks Consulting
          </a>
        </Header>
      </div>
    );
  }
};
export default withAuthenticator(App, {includeGreetings: true});