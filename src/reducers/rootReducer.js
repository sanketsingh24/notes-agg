import { combineReducers } from 'redux';

import dept from './dept';
import fetchsubject from './fetchSubjects';
//import subject from './subject';

const rootReducer = combineReducers({
  dept : dept,
  subjects : fetchsubject
//  subject : subject,
});

export default rootReducer;
