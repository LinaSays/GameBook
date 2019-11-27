import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import profile from './profile';
import createStory from './createStory';
import signin from './signin';
import forgotten from './forgotten';
import home from './home';
import startStory from './startStory';

// https://redux.js.org/api/combinereducers
const reducer = combineReducers({
  // user: user
  profile,
  createStory,
  signin,
  forgotten,
  home,
  startStory,
});

export default reducer;
