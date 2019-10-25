import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import profile from './profile';
import createStory from './createStory';
import connexion from './connexion';
import signin from './signin';
import forgotten from './forgotten';
import home from './home';

// combineReducers nous retourne le reducer parent généré
// on doit fournir en paramètre un objet
// avec en clé un nom donné à chaque reducer et en valeur, chaque fonction reducer
// https://redux.js.org/api/combinereducers
const reducer = combineReducers({
  // user: user
  profile,
  createStory,
  connexion,
  signin,
  forgotten,
  home,
});

export default reducer;