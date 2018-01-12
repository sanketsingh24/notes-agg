import React, {Component} from 'react';
//import '../../../css/coursess.css'

export default class Courses extends Component {
  constructor (props) {
      super(props);
    }

  render() {
    return (
      <div className="courses">
        <nav>
          <ul>
              <li><a href="#nowhere">lol</a>
                  <ul>
                  <li><a href="#">rofl</a> </li>
                  <li><a href="#">Notes</a> </li>
                  <li><a href="#">Videos</a> </li>
                  </ul>
              </li>
          </ul>
      </nav>
      </div>
    );
  }
}
