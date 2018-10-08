import React, { Component } from 'react';
import './App.css';
import TwitPost from './components/TwitPost';
import TwitList from './components/TwitList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TwitPost />
        <TwitList />
      </div>
    );
  }
}

export default App;
