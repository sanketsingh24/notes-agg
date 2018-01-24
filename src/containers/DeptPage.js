import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from '../components/Departments/Icon';
import { requestSubjects, receiveError, receiveSubjects } from '../actions/action';

function mapStateToProps(state) {
  return {
    dept: state.dept
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(addDept, dispatch);
// }

export default connect(mapStateToProps, {fetchSubjectWithRedux})(Icon);

function fetchSubjectWithRedux(deptId,courseIds) {
	return (dispatch) => {
  	dispatch(requestSubjects(deptId));
    return fetchSubject(courseIds).then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(receiveSubjects(json))
      }
      else{
      	dispatch(receiveError())
      }
    })
  }
}

function fetchSubject(courseIds) {
  return axios.get(`http://0.0.0.0:3000/api/subjects/${courseIds.join(',')}`)
              .then(resp => resp.data);
}