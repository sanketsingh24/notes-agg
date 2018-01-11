import React, { Component } from 'react';
// Components
import Icon from './Departments/Icon';
import Sidenav from './NavBar/Sidenav';
import Semcourses from './CoursePage/Semcourses';

// css
//import '../../css/App.css';

class App extends Component {
  state = {
    courses: this.props.initialData
  };

  componentDidMount() {


  }

  render() {
    return (
      <div className="App" >
        <Sidenav />
        <div id="container">
          <div className="board">
            <Icon alldata={this.state.courses} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
