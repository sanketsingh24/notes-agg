import React, {Component} from 'react';
//import '../../../css/coursess.css'

export default class Courses extends Component {
  constructor (props) {
      super(props);
    }

  render() {
    return (
      <div className="courses">
        <h6>{this.props.subjects.course_name}</h6>
        <h6>{this.props.subjects.course_id}</h6>
        <h6>{this.props.subjects.sem_no}</h6>
      </div>
    );
  }
}
