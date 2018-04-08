import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchSubjectsIfNeeded } from "../../actions/action";
import Courses from '../courses/courses';
import Header from '../Header/Header';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Semcourses extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, dept, match } = this.props;
    const ID = dept.findIndex(id => id.dept_id === match.params.deptId);
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
    if(typeof this.props.subjects == 'undefined' ) {
      return document.getElementById("root").style.opacity="0.2";
    }
    document.getElementById("root").style.opacity="1";
    return (
      <MuiThemeProvider>
        <div className="tabs">
        <Tabs>
        {this.props.subjects.map( (subject,i) => {
          let semno = subject.sem_no;
          return (
            <Tab key={i} label={`Semester ${semno}`} value={i}>
              <Card>
                  <CardHeader
                  title={this.props.subjects[i].course_name}
                  subtitle={this.props.subjects[i].course_id}
                  actAsExpander={true}
                  showExpandableButton={true}
                  />
                  <CardText expandable={true}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
              </Card>
              <Card>
                  <CardHeader
                  title={this.props.subjects[i].course_name}
                  subtitle={this.props.subjects[i].course_id}
                  actAsExpander={true}
                  showExpandableButton={true}
                  />
                  <CardText expandable={true}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
              </Card>
            </Tab>
        )})}
        </Tabs>
        </div>
      </MuiThemeProvider>);
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
                {this.book(this.props.isFetching)} 
                
                
                 <Tab key={i} label={}  {...subject}  />*/
