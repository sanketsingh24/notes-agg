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
        this.setState({
          data : nextprops.alldata
        });

    }

    render(){
      return(
        <div>
          <Header message={this.state.pageHeader} />
          <Semester  semList={this.state.data.total_sems}/>
          <Courses subjectList={this.state.data.subjects}/>
        </div>
      )
    }
}
