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
function requestDepts(deptId) {
  console.log( "requestDepts" + deptId);
  return {
    type: REQUEST_DEPTS,
    deptId
  }
}

function receiveDepts(deptId, json) {
  console.log( "receiveDepts" + json);
  return {
    type: RECEIVE_DEPTS,
    deptId,
    dept : json.data.children.map(child => child.data)
  }
}


function requestSubjects(deptId) {
  console.log(" requestSubjects "+ deptId);
  return {
    type: REQUEST_SUBJECTS,
    deptId
  }
}

function receiveSubjects(deptId, json) {
  console.log(" receiveSubjects" + deptId + " " + json);
  return {
    type: RECEIVE_SUBJECTS,
    deptId,
    subjects: json.data.children.map(child => child.data)
  }
}

function fetchSubjects(deptId) {
  console.log(" fetchSubjects " + deptId);
  return dispatch => {
    dispatch(requestSubjects(deptId))
    return api.fetchSubjects(courseIds)
      .then(response => response.json())
      .then(json => dispatch(receiveSubjects(deptId, json)))
  }
}

function shouldFetchSubjects(state, deptId) {
  console.log(" shouldFetchSubjects " + state.subjects + " " + deptId);
  const subject = state.subjects;
  if (!subject) {
    console.log("disp");
    return true
  } else if (subject.isFetching) {
    return false
  } 
}

// function fetchDept (deptId) {
//   console.log(" fetchDept " + deptId);
//   return dispatch => {
//     dispatch(requestDepts(deptId))
//     return api.fetchDept(deptId)
//       .then(response => response.json())
//       .then(json => dispatch(receiveDepts(deptId,json)))
//   }


export function fetchSubjectsIfNeeded(deptId) {
  console.log(" fetchSubjectsIfNeeded " + deptId)
  return (dispatch, getState) => {
    if (shouldFetchSubjects(getState(), deptId)) {
      // dispatch(fetchDept(deptId));
      return dispatch(fetchSubjects(deptId));
      
    }
  }
}




