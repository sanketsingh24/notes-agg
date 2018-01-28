import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import routes from './routes/routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
