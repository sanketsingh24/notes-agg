import { REQUEST_DEPTS, RECEIVE_DEPTS } from '../actions/action';

export default function fetchDepts (state = {}, action) {
    switch (action.type) {
      case REQUEST_DEPTS:
        return state;
      case RECEIVE_DEPTS: 
        return {...state, depts: action.dept};
      default:
        return state;
    }
  } 