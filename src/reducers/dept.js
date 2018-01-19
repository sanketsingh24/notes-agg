export default function dept(state = initialstate, action) {
  if(action.type === 'ADD_DEPT') {
    state.dept.push({
      dept_name : dept_name,
      dept_id : dept_id,
      imge : imge
    });
    state.dept.course_ids.push({
      course_id
    });
  }
  return state;
}
