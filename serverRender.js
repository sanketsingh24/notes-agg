import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/info`)
    .then(resp => {
      return{
        initialMarkup :ReactDOMServer.renderToString(
        <App initialinfo={resp.data.courses}/>),
        initialinfo : resp.data.courses
      };
    });

export default serverRender;
