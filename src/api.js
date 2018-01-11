import axios from 'axios';

export const fetchData = deptId => {
  return axios.get(`http://0.0.0.0:3000/api/info/${deptId}`)
              .then(resp => resp.data)
};
