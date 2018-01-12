import React, {Component} from 'react';
import Semester from '../Semesters/Semester';
import Courses from '../courses/courses';
import Header from '../Header/Header';

export default class Semcourses extends Component {
  constructor (props) {
	    super(props);
	    this.state = {
				pageHeader: 'List of Courses'
			 };
		}
    render(){
      return(
        <div>
          <Header onClick={this.props.deptClick} message={this.state.pageHeader} />
          <Semester  semList={this.props.total_sems}/>
          <Courses />
        </div>
      )
    }
}
