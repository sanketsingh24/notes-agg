import React, { Component } from 'react';
// Components
import Icon from './Departments/Icon';
import Sidenav from './NavBar/Sidenav';
import Semcourses from './CoursePage/Semcourses';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends Component {
  state = {
    courses: this.props.initialinfo
  };

  componentDidMount() {
    window.onpopstate = (event) => {
      this.setState({
        currentDept: (event.state || {}).currentDept
      });
    };
  }

  fetchData = (deptId) => {
    pushState(
       { currentDept: deptId },
       `/dept/${deptId}`
    );

    api.fetchData(deptId).then(dept => {
      this.setState({
        currentCourse: dept.dept.id,
        currentDept: dept.dept.dept_id,
        courses: {
          ...this.state.courses
        }
      });
    })


  };

  currentContent() {
    if (this.state.currentDept){
       return <Semcourses alldata={this.state.courses[this.state.currentCourse]} />
    }

    return <Icon
            onDeptSelect = {this.fetchData}
            alldata={this.state.courses}
            />;

  }

  render() {
    return (
      <div className="App" >
        <Sidenav />
        <div id="container">
          <div className="board">
            {this.currentContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
