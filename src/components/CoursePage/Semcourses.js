import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchSubjectsIfNeeded } from "../../actions/action";
import Courses from '../courses/courses';
import Header from '../Header/Header';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

export default class Semcourses extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSubjectsIfNeeded(this.props.match.params.deptId));
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params.deptId !== prevProps.dept.dept_id) {
  //     const { dispatch } = this.props;
  //     dispatch(fetchSubjectsIfNeeded(this.props.match.params.deptId))
  //   }
  // }

  handleChange(dept_id) {
    const deptId = this.props.match.params.deptId;
    this.props.dispatch(fetchSubjectsIfNeeded(dept_id))
  }

  // look(courseId, i) {
  //   let semno = courseId.toString()[2];
  //   return(
  //         <Tab key={i} label={semno}>
  //           <Courses {...this.props.subjects[courseId]} />
  //         </Tab>
  //   );
  // }

  render(){
    return(
      <div>
        <Header message='List of Courses' />
        <p></p>
      </div>
    );
  }
}

/**        <Tabs className="courses">
          {this.props.subjects.course_ids.map(this.look.bind(this))}
        </Tabs> */
