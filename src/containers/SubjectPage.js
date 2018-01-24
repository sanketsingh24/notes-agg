import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Semcourses from '../components/CoursePage/Semcourses';

function mapStateToProps(state) {
  return {
    subjects: state.subjects
  };
}

export default connect(mapStateToProps)(Semcourses);


