import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import axios from 'axios';
// Components
import Icon from './Departments/Icon';
import Sidenav from './NavBar/Sidenav';
import Semcourses from './CoursePage/Semcourses';

// css
import '../../css/App.css';

class App extends Component {
  state = {
    courses: this.props.initialData
  };

  componentDidMount() {
    axios.get('/api/info')
      .then(resp => {
          this.setState({
            courses: resp.data
          });
        })
      .catch(console.error)
  }

  render() {
    return (
      <div className="App" >
        <Sidenav />
        <div id="container">
          <div className="board">
            <Router>
              <Switch>
                <Route exact path="/about" render={()=> <Semcourses alldata={this.state.courses} />} />
                <Route exact path="/" render={()=> <Icon alldata={this.state.courses} />} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
