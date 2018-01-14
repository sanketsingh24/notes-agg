import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = (deptId) => {
  if (deptId) {
    return `${config.serverUrl}/api/info/${deptId}`;
  }
  return `${config.serverUrl}/api/info`;
};

const getInitialData = (deptId, apiData) => {
  if (deptId) {
    return {
      currentDeptId: apiData.id,
      courses: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    courses: apiData
  };
};


const serverRender = (deptId) =>
  axios.get(getApiUrl(deptId))
    .then(resp => {
      const initialinfo = getInitialData(deptId, resp.data);
      return{
        initialMarkup :ReactDOMServer.renderToString(
        <App initialinfo={initialinfo}/>),
        initialinfo
      };
    });

export default serverRender;
