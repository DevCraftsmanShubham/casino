import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/Store';
import './index.css';
import CustomSnackbar, {
  snackbarRef,
} from './components/CustomSnackbar/CustomSnackbar';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomSnackbar ref={snackbarRef} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
