import React, { Component } from 'react';
import Icon from './Departments/Icon';
import Sidenav from './NavBar/Sidenav';
import Semcourses from './CoursePage/Semcourses';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};


class App extends Component {
  state = {
    courses: this.props.initialinfo
  };

  componentDidMount() {
    onPopState((event) => {
       this.setState({
        currentDeptId: (event.state || {}).currentDeptId
      });
    });

  }
  componentWillUnmount() {
    onPopState(null);
  }

  fetchData = (deptId) => {
    pushState(
       { currentDeptId: deptId },
       `/dept/${deptId}`
    );
    api.fetchDept(deptId).then(dept => {
      console.log(dept.id)
      this.setState({
        currentDeptId: dept.id,
        courses: {
          ...this.state.courses,
          [dept.id]: dept
        }
      });
    });
  };

  fetchDeptList = () => {
    pushState(
      { currentDeptId: null },
      '/'
    );
    api.fetchDeptList().then(Dept => {
      this.setState({
        currentDeptId: null,
        Dept
      });
    });
  };

  currentDept() {
    return this.state.courses[this.state.currentDeptId];
  }

  currentContent() {
    if (this.state.currentDeptId) {
      return <Semcourses
                deptClick = {this.fetchDeptList}
                {...this.currentDept()} />;
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
