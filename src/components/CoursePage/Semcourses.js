import React, {Component} from 'react';
import Semester from '../Semesters/Semester';
import Courses from '../courses/courses';
import Header from '../Header/Header';

export default class Semncourses extends Component {
  constructor (props) {
	    super(props);
	    this.state = {
				data : this.props.alldata ,
				pageHeader: 'List of Courses'
			 };
		}

    componentWillReceiveProps(nextprops) {
      console.log(nextprops.alldata.courses);
        this.setState({
          data : nextprops.alldata.courses
        })
    }
    render(){
      return(
        <div>
          <Header message={this.state.pageHeader} />
          <Semester />
          <Courses />
        </div>
      )
    }
}
