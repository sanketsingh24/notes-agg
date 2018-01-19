import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './containers/App';


export default (
  <Router>
    <Switch>
      <Route exact path="/dept/:deptid" render={()=> <Semcourses />} />
      <Route exact path="/" render={()=> <Icon />} />
    </Switch>
  </Router>
);
