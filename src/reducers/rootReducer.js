import { combineReducers } from 'redux';

import dept from './dept';
//import subject from './subject';

const rootReducer = combineReducers({
  dept : dept,
//  subject : subject,
});

export default rootReducer;
