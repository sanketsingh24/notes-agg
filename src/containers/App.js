import React, { Component } from 'react';
import Sidenav from '../components/NavBar/Sidenav';
import DeptPage from './DeptPage';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Sidenav />
        <div id="container">
          <div className="board">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
