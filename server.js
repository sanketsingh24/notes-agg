import config from './config';
import apiRouter from './api';
import express from 'express';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';

import { createStore } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import App from './src/containers/App';
import * as api from './src/api/api';

const server = express();

function fullPage(html,preloadedstate) {
  return (
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
        <title>Notes App</title>
        <link href="/css/App.css" rel="stylesheet" type="text/css">
        <link href="/css/coursess.css" rel="stylesheet" type="text/css">
        <link href="/css/icons.css" rel="stylesheet" type="text/css">
        <link href="/css/sidenavs.css" rel="stylesheet" type="text/css">
        <link href="/css/dialogbo.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" media="screen" href="//cdn.muicss.com/mui-0.9.35/css/mui.css" />
      </head>
      <body>
        <div id="root">${html}</div>

        <script type="text/javascript">
          window.__INITIAL_STATE__ =  ${JSON.stringify(preloadedstate)};
        </script>
        <script src="/bundle.js" charset="utf-8"></script>

      </body>
    </html>`);
}

server.get('/', function (req, res) {
//  console.log(' server/get ');
  api.fetchDeptList()
    .then(resp => {
//      console.log(resp);
      let initialState = resp;
      console.log(resp);
      console.log(rootReducer);
      const store = createStore(rootReducer, initialState);
      console.log(' 1 ');
      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );
      console.log(' 2 ');

      const preloadedstate = store.getState();
      console.log(' 3 ');

      res.send(fullPage(html,preloadedstate));
    });

});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port,config.host, () => {
  console.info('Express on port ', config.port,config.host);
});
