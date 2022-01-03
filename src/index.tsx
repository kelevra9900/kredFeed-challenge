import React from 'react';
import ReactDOM from 'react-dom';
import { FormContextProvider } from 'context/FormContext';
import FormView from './views/FormView';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <FormView />
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

reportWebVitals();
