import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { CssBaseline } from '@mui/material';
import AuthContext from './contexts/AuthContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <Provider store={store}>
        <CssBaseline>
          <App />
          <ToastContainer position='top-center' autoClose={500} />
        </CssBaseline>
      </Provider>
    </AuthContext>
  </React.StrictMode>
);
