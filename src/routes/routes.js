import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DeptPage from '../containers/DeptPage';
import SubjectPage from '../containers/SubjectPage';

import App from '../containers/App';


export default (
  <Route exact path="/" component={App} >
    <Route path="/" component={DeptPage} />
    <Route path="/dept/:deptId" component={SubjectPage} />
  </Route>
);
 