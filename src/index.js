import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import { renderRoutes } from 'react-router-config';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
