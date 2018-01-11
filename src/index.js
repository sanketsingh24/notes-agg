import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
  <App initialData={window.initialinfo.courses} />,
  document.getElementById('root')
);
