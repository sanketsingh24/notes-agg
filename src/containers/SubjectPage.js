import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Semcourses from '../components/CoursePage/Semcourses';
import { fetchSubjectsIfNeeded } from "../actions/action";

function mapStateToProps(state) {
  const { deptId } = state;
  return {
    deptId,
    dept : state.dept,
    subject : state.subject,
    subjects : state.subject.subjects
  }
}

export default connect(mapStateToProps)(Semcourses);


