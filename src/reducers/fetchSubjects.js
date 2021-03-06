import { REQUEST_SUBJECTS, RECEIVE_SUBJECTS, RECEIVE_SUBJECTS_ERROR } from '../actions/action';

export default function fetchSubjects (state = {}, action) {
    switch (action.type) {
      case REQUEST_SUBJECTS:
        return {...state, deptId};
      case RECEIVE_SUBJECTS: 
        return {...state, subjects: action.payload.subjects};
      case RECEIVE_SUBJECTS_ERROR: 
        return state;
        console.log(`500 ${RECEIVE_SUBJECTS_ERROR}`);
      default:
        return state;
    }
  } 