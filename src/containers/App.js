import React, { Component } from 'react';
import Sidenav from '../components/NavBar/Sidenav';
import DeptPage from './DeptPage';
import SubjectPage from './SubjectPage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Sidenav />
        <div id="container">
          <div className="board">
            <Switch>
              <Route exact path="/" component={DeptPage} />
              <Route exact path="/dept/:deptId" component={SubjectPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
