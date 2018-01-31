import { combineReducers } from 'redux';

import dept from './fetchDept';
//import subject from './subject';
import {
  REQUEST_SUBJECTS,
  RECEIVE_SUBJECTS
} from '../actions/action'

function subjects(
  state = {
    isFetching: false,
    subjects: [],
    dept: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_SUBJECTS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_SUBJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        subjects: action.subjects,
      })
    default:
      return state
  }
}

function subjectsByfetching(state = {}, action) {
  switch (action.type) {
    case REQUEST_SUBJECTS:
    case RECEIVE_SUBJECTS:
      return Object.assign({}, state, {
        [action.subreddit]: subjects(state[action.subreddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  dept : dept,
  subjects : [],
  subjectsByfetching
//  subject : subject,
});

export default rootReducer;
