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
      console.log(dept.id);
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

  fetchSubjects = (courseIds) => {
    if(courseIds.length === 0) {
      return ;
    }
    api.fetchSubjects(courseIds).then(subjects =>{
      this.setState({
        subjects
      });
    });
  };

  currentDept() {
    return this.state.courses[this.state.currentDeptId];
  }

  lookupSubjects = (courseId) => {
    if(!this.state.subjects || !this.state.subjects[courseId]) {
      return 'Loading..';
    }
    return this.state.subjects[courseId];
  }

  currentContent() {
    if (this.state.currentDeptId) {
      return <Semcourses
                deptClick = {this.fetchDeptList}
                fetchSubjectList = {this.fetchSubjects}
                lookupSubjects = {this.lookupSubjects}
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
