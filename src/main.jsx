import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { insurance } from './insurance.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={insurance}>
    <App />
  </Provider>,
);
