import axios from 'axios';

export const fetchDept = (deptId) => {
  return axios.get(`/api/info/${deptId}`)
              .then(resp => resp.data);
};

export const fetchDeptList = () => {
  return axios.get('/api/info')
              .then(resp => resp.data);
};

export const fetchSubjects = (courseIds) => {
  return axios.get(`/api/subjects/${courseIds.join(',')}`)
              .then(resp => resp.data.subjects);
};
