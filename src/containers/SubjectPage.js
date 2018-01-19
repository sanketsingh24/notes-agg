import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Semcourses from '../components/CoursePage/Semcourses';
import { addSubject } from '../actions/action';

function mapStateToProps(state) {
  return {
    subjects: state.subjects
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(addSubject, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Semcourses);
