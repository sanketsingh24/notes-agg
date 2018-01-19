import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import undoable from 'redux-undo';

import dept from './dept';
import subject from './subject';

const rootReducer = combineReducers({
  dept : undoable(dept),
  subject : undoable(subject),
  router : routerStateReducer
});

export default rootReducer;
