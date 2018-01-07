import React, {Component} from 'react';
import '../../../css/coursess.css'

export default class Courses extends Component {

  render() {
    return (
      <div className="courses">
        <h1>Courses</h1>
        <nav>
          <ul>
              <li><a href="#nowhere">GLC13101</a>
                  <ul>
                  <li><a href="#">Books</a> </li>
                  <li><a href="#">Notes</a> </li>
                  <li><a href="#">Videos</a> </li>
                  </ul>
              </li>
              <li><a href="#nowhere" >GLC13102</a>
                  <ul>
                      <li><a href="#">Books</a></li>
                      <li><a href="#">Notes</a></li>
                      <li><a href="#">Videos</a></li>
                  </ul>
              </li>
          </ul>
      </nav>
      </div>
    );
  }
}
