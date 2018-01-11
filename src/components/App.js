import React, { Component } from 'react';
// Components
import Icon from './Departments/Icon';
import Sidenav from './NavBar/Sidenav';
import Semcourses from './CoursePage/Semcourses';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends Component {
  state = {
    courses: this.props.initialData
  };

  componentDidMount() {

  }

  fetchContest = (deptId) => {
    pushState(
       { currentDept: deptId },
       `/dept/${deptId}`
    );
    const i = this.state.courses.findIndex((data) => data.dept_id === deptId);
    const dept = this.state.courses[i];
    this.setState({
      currentDept: i,
      DeptOn : true
    });
  };

  currentContent() {
    if (this.state.DeptOn){
       return <Semcourses alldata={this.state.courses[this.state.currentDept]} />
    }

    return <Icon
            onDeptSelect = {this.fetchContest}
            alldata={this.state.courses} />;

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
