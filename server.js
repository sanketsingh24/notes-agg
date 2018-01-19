import config from './config';
import apiRouter from './api';
import express from 'express';

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import { configureStore } from './src/store/configureStore';
import App from './src/components/App';

const server = express();
const history = createBrowserHistory();

server.use( (req,res) => {
  const store = configureStore(initialState);

  const html = renderToString(
    <Provider store={store}>
      <App history={history} />
    </Provider>
  );

    
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port,config.host, () => {
  console.info('Express on port ', config.port,config.host);
});
