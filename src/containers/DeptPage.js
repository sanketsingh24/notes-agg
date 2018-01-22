import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from '../components/Departments/Icon';
import { addDept } from '../actions/action';

function mapStateToProps(state) {
  return {
    dept: state.dept
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(addDept, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
