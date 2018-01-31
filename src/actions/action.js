export const ADD_DEPT = 'ADD_DEPT';
export const REQUEST_SUBJECTS = 'REQUEST_SUBJECTS';
export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_SUBJECTS_ERROR = 'RECEIVE_SUBJECTS_ERROR';
export const REQUEST_DEPTS = 'REQUEST_DEPTS';
export const RECEIVE_DEPTS = 'RECEIVE_DEPTS';
export const RECEIVE_DEPTS_ERROR = 'RECEIVE_DEPTS_ERROR';
import axios from 'axios';
import * as api from '../api/api';

// export function addDept(dept_name, dept_id, imge, course_id) {
//   return {
//     type: ADD_DEPT,
//     dept_name,
//     dept_id,
//     imge,
//     course_id
//   };
// }

// export function addSubject(sem_no, course_name, course_id, books, Presentations, Topic_Videos, Notes) {
//   return {
//     type: 'ADD_SUBJECT',
//     sem_no,
//     course_name,
//     course_id,
//     books,
//     Presentations,
//     Topic_Videos,
//     Notes
//   };
// }
// function requestDepts(deptId) {
//   console.log( "requestDepts" + deptId);
//   return {
//     type: REQUEST_DEPTS,
//     deptId
//   }
// }

// function receiveDepts(deptId, json) {
//   console.log( "receiveDepts" + json);
//   return {
//     type: RECEIVE_DEPTS,
//     deptId,
//     dept : json.data.children.map(child => child.data)
//   }
// }


function requestSubjects(deptId) {
  return {
    type: REQUEST_SUBJECTS,
    deptId
  }
}

function receiveSubjects(deptId, resp) {
  return {
    type: RECEIVE_SUBJECTS,
    deptId,
    subjects: resp
  }
}

function fetchSubjects(deptId, courseIds) {
  return dispatch => {
    dispatch(requestSubjects(deptId))
    return api.fetchSubjects(courseIds)
      .then(resp => dispatch(receiveSubjects(deptId, resp)))
  }
}

function shouldFetchSubjects(state, deptId) {
  const subject = state.subjects;
  if (!subject) {
    return true
  } 
}

export function fetchSubjectsIfNeeded(deptId, courseIds) {
  return (dispatch, getState) => {
    if (shouldFetchSubjects(getState(), deptId)) {
      // dispatch(fetchDept(deptId));
      return dispatch(fetchSubjects(deptId, courseIds));
      
    }
  }
}




