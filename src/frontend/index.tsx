import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import App from './routes/App';
import './sass/index.scss';

const history = createBrowserHistory();
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  app,
);
