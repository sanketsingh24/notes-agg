export const ADD_DEPT = 'ADD_DEPT';
export const REQUEST_SUBJECTS = 'REQUEST_SUBJECTS';
export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

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

export function requestSubjects(deptId) {
  return {
    type: REQUEST_SUBJECTS,
    deptId
  }
}

export function receiveSubjects(payload) {
  return {
    type: RECEIVE_SUBJECTS,
    payload
  }
}

export function receiveError() {
  return {
    type: RECEIVE_ERROR
  }
}