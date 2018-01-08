import React, { Component } from 'react';
import axios from 'axios';
// Components
import Icon from './Departments/Icon';
import Sidenav from './NavBar/Sidenav';
// css
import '../../css/App.css';

const pushState = (obj,url) =>
  window.history.pushState(obj, '', url);

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

  fetchDept = (departmentId) => {
    pushState(
      {currentDept: departmentId},
      `/contest/${departmentId}`
    );
  };

  render() {
    return (
      <div className="App" >
        <Sidenav />
        <div id="container">
          <div className="board">
            <Icon onDeptClick={this.fetchDept} alldata={this.state.courses} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
