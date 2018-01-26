import React, { Component } from 'react';
import Sidenav from '../components/NavBar/Sidenav';
import DeptPage from './DeptPage';
import routes from '../routes/routes';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Sidenav />
        <div id="container">
          <div className="board">
            {routes}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
