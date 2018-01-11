import React, {Component} from 'react';
import Semester from '../Semesters/Semester';
import Courses from '../courses/courses';
import Header from '../Header/Header';

export default class Semcourses extends Component {
  constructor (props) {
	    super(props);
	    this.state = {
				data : this.props.alldata ,
				pageHeader: 'List of Courses'
			 };
		}

    componentWillReceiveProps(nextprops) {
      console.log(nextprops.alldata);
        this.setState({
          data : nextprops.alldata
        });

    }

    render(){
      const i = this.state.data.courses.findIndex((data) => data.dept_id === this.props.match.id);
      const dept = this.state.data.courses[i];
      console.log(dept);
      return(
        <div>
          <Header message={this.state.pageHeader} />
          <Semester  semList={dept.total_sems}/>
          <Courses subjectList={dept.subjects}/>
        </div>
      )
    }
}
