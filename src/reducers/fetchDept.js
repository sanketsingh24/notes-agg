import { REQUEST_DEPTS, RECEIVE_DEPTS, RECEIVE_DEPTS_ERROR } from '../actions/action';

export default function fetchDepts (state = {}, action) {
    switch (action.type) {
      case REQUEST_DEPTS:
        return {...state};
      case RECEIVE_DEPTS: 
        return {...state, depts: action.payload.depts};
      case RECEIVE_DEPTS_ERROR: 
        return state;
        console.log(`500 ${RECEIVE_ERROR}`);
      default:
        return state;
    }
  } 