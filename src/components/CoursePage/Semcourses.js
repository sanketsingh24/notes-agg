import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchSubjectsIfNeeded } from "../../actions/action";
import Courses from '../courses/courses';
import Header from '../Header/Header';

export default class Semcourses extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, dept, match } = this.props;
    const ID = dept.findIndex(id => id.dept_id === match.params.deptId);
    console.log(ID);
    dispatch(fetchSubjectsIfNeeded(ID, dept[ID].course_ids));
  }


  // look(courseId, i) {
  //   let semno = courseId.toString()[2];
  //   return(
  //         <Tab key={i} label={semno}>
  //           <Courses {...this.props.subjects[courseId]} />
  //         </Tab>
  //   );
  // }
  book () {
    if(typeof this.props.subjects == 'undefined') {
      console.log("NO sub");
      return (<p> NO </p>);
    }
    console.log("Subs here")
    return (<p> {this.props.subjects.map( (subject) => 
      <div>{subject.course_name}</div>
     )} 
    </p>);
  }

  render(){
    return(
      <div>
        <Header message='List of Courses' />
        {this.book()}
      </div>
    );
  }
}

/**        <Tabs className="courses">
          {this.props.subjects.course_ids.map(this.look.bind(this))}
        </Tabs>
                {this.book(this.props.isFetching)} */
