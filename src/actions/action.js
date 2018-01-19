export function addDept(dept_name, dept_id, imge, course_id) {
  return {
    type: 'ADD_DEPT',
    dept_name,
    dept_id,
    imge,
    course_id
  };
}

export function addSubject(sem_no, course_name, course_id, books, Presentations, Topic_Videos, Notes) {
  return {
    type: 'ADD_SUBJECT',
    sem_no,
    course_name,
    course_id,
    books,
    Presentations,
    Topic_Videos,
    Notes
  };
}
