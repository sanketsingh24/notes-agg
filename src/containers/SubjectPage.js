import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Semcourses from '../components/CoursePage/Semcourses';
import { fetchSubjectsIfNeeded } from "../actions/action";

function mapStateToProps(state) {
  const { deptId } = state;
  return {
    deptId,
    subjects: state.subjectsByfetching.subjects,
    dept : state.dept
  }
}

export default connect(mapStateToProps)(Semcourses);


