import React, { Component } from 'react';
import axios from 'axios';
// Components
import Board from './Board';
import Sidenav from './NavBar/Sidenav';
// css
import '../../css/App.css';

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get('/api/info')
      .then(resp => {
        console.log(resp);
      })
      .catch(console.error)

/**    this.setState({
      courses: data.courses
    });*/
  }
  render() {
    return (
      <div className="App">
        <Sidenav />
        <Board />
      </div>
    );
  }
}

export default App;
