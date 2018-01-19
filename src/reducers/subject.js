export default function subjects(state = initialstate, action) {
  if(action.type === 'ADD_SUBJECT') {
    state.subjects.push({
      sem_no : sem_no,
      course_name : course_name,
      course_id : course_id,
      books : books,
      Presentations : Presentations,
      Topic_Videos : Topic_Videos,
      Notes : Notes       
    });
  }
  return state;
}
