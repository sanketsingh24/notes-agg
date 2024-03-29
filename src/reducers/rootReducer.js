import { combineReducers } from 'redux';

import dept from './fetchDept';
//import subject from './subject';
import {
  REQUEST_SUBJECTS,
  RECEIVE_SUBJECTS
} from '../actions/action'

function subjectsByfetching( state = {}, action) {
  switch (action.type) {
    case REQUEST_SUBJECTS:
      return Object.assign({}, state, {});
    case RECEIVE_SUBJECTS:
      return {...state , subjects: action.subjects};
    default:
      return state
  }
}

let ref=[];
const rootReducer = combineReducers({
  dept : dept,
  subject : subjectsByfetching,
  //  subject : subject,
});

export default rootReducer;
