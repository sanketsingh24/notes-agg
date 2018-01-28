import axios from 'axios';
import config from '../../config';

export const fetchDept = (deptId) => {
  return axios.get(`${config.serverUrl}/api/info/${deptId}`)
              .then(resp => resp.data);
};

export const fetchDeptList = () => {
  return axios.get(`${config.serverUrl}/api/info`)
              .then(resp => resp.data);
};

export const fetchSubjects = (courseIds) => {
  return axios.get(`${config.serverUrl}/api/subjects/${courseIds.join(',')}`)
              .then(resp => resp.data);
};

