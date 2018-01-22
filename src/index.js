import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
