export const ADD_DEPT = 'ADD_DEPT';
export const REQUEST_SUBJECTS = 'REQUEST_SUBJECTS';
export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_SUBJECTS_ERROR = 'RECEIVE_SUBJECTS_ERROR';
export const REQUEST_DEPTS = 'REQUEST_DEPTS';
export const RECEIVE_DEPTS = 'RECEIVE_DEPTS';
export const RECEIVE_DEPTS_ERROR = 'RECEIVE_DEPTS_ERROR';

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

export function receiveSubjectsError() {
  return {
    type: RECEIVE_SUBJECTS_ERROR
  }
}

export function requestDepts() {
  return {
    type: REQUEST_DEPTS,
  }
}

export function receiveDepts(payload) {
  return {
    type: RECEIVE_DEPTS,
    payload
  }
}

export function receiveDeptsError() {
  return {
    type: RECEIVE_DEPTS_ERROR
  }
}