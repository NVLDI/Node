import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to My React App with AWS Amplify</h1>
      </header>
    </div>
  );
}

export default App;
