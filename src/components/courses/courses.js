import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Courses extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="courses">
        <p>Course Name: {this.props.subject.course_name} </p> 

      </div>
    );
  }
}
