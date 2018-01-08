import React, { Component } from 'react';
import axios from 'axios';
// Components
import Icon from './Departments/Icon';
import Sidenav from './NavBar/Sidenav';
// css
import '../../css/App.css';

class App extends Component {
  state = {
    courses: []
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
            <Icon alldata={this.state.courses} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
