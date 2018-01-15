import React, {Component} from 'react';
import Courses from '../courses/courses';
import Header from '../Header/Header';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

export default class Semcourses extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pageHeader: 'List of Courses'
    };
  }
  componentDidMount() {
    this.props.fetchSubjectList(this.props.course_ids);
  }

  look(courseId, i) {
    let semno = courseId.toString()[2];
    return(
          <Tab key={i} label={semno}>
            <Courses subjects={this.props.lookupSubjects(courseId)}/>
          </Tab>
    );
  }

  render(){
    return(
      <div>
        <Header onClick={this.props.deptClick} message={this.state.pageHeader} />
        <Tabs className="courses">
        {this.props.course_ids.map(this.look.bind(this))}
        </Tabs>
      </div>
    );
  }
}

// <Courses  subjects = {this.props.subjects}/>
