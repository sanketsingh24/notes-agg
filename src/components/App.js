import React, { Component } from 'react';

// Components
import Board from './Board';
import Sidenav from './NavBar/Sidenav';

// css
import '../../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav />
        <Board />
      </div>
    );
  }
}

export default App;
