// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// == Import : local
import App from 'src/containers/App';
import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
