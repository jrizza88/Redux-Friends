import React, { Component } from 'react';
import './App.css';
import { FriendListView } from './Views';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jamar's world</h1>
          <FriendListView />
      </div>

    );
  }
}

export default App;
