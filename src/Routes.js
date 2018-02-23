import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import store from './store';

function Routes() {
  return (
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  );
}

export default Routes;
