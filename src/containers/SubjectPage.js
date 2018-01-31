import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Semcourses from '../components/CoursePage/Semcourses';
import { fetchSubjectsIfNeeded } from "../actions/action";

function mapStateToProps(state) {
  const { deptId, subjectsByfetching } = state
  const { isFetching, subjects: subjects} = subjectsByfetching[deptId] || { isFetching: true, subjects: []};
  return {
    deptId,
    subjects,
    isFetching,
    dept : state.dept
  }
}

export default connect(mapStateToProps)(Semcourses);


