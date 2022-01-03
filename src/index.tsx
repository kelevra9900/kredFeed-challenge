import React from 'react';
import ReactDOM from 'react-dom';
import { FormContextProvider } from 'context/FormContext';
import FormView from './views/FormView';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <FormView />
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
reportWebVitals();
