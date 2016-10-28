import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css';
import Feed from './Feed.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
      
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit LOll<code>src/App.js</code> and save to reload.

          <Feed />
        </p>
      </div>
    );
  }
}

export default App;
