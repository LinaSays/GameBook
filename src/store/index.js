// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer';
import homeMiddleware from './middlewares/homeMiddleware';
import profileMiddleware from './middlewares/profileMiddleware';
import storyMiddleware from './middlewares/storyMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    homeMiddleware,
    profileMiddleware,
    storyMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
