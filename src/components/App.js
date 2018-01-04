import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Board from './Board';
import Sidenav from './NavBar/Sidenav';
import Courses from './courses/courses';


import { Link } from 'react-router-dom';


// css
import '../../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav />
        <Router>
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/" component={Board} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
