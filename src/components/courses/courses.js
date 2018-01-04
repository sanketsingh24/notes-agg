import React, {Component} from 'react';
import '../../../css/coursess.css'

export default class Courses extends Component {
  constructor (props) {
	    super(props);
		}

  render() {
    return (
      <div className="courses">
        <h1>Courses</h1>
        <ul>
          <li>GLC13101</li>
          <li>GLC14101</li>
        </ul>
      </div>
    );
  }
}
