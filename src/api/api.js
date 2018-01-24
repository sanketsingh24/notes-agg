import axios from 'axios';

export const fetchDeptList = () => {
  return axios.get('http://0.0.0.0:3000/api/info')
              .then(resp => resp.data);
};

// export const fetchSubjects = (courseIds) => {
//   return axios.get(`http://0.0.0.0:3000/api/subjects/${courseIds.join(',')}`)
//               .then(resp => resp.data.subjects);
// };
