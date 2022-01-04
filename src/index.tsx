import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FormContextProvider } from 'context/FormContext';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

reportWebVitals();
