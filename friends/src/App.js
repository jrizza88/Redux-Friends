import React, { Component } from 'react';
import './App.css';
import { FriendListView } from './Views';
import styled from 'styled-components';

const APP = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`

class App extends Component {
  render() {
    return (
      <APP>
        <h1>Jamar's friends</h1>
          <FriendListView />
      </APP>

    );
  }
}

export default App;
