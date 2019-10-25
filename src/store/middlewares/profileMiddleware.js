import axios from 'axios';

import { GET_PROFILE, showProfile } from 'src/store/reducer/profile';
import { CONNECT_USER, saveUser } from 'src/store/reducer/signin';

const profileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      const state = store.getState();
      axios.get(`http://localhost:3000/profile/${id}`)
        .then((response) => {
          const save = showProfile(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
        });
      break;
    }
    case CONNECT_USER: {
      const state = store.getState();
      const { email, password } = state.signin;

      axios.post('http://localhost:3000/profile', {
        email,
        password,
      })
        .then((response) => {
          console.log(response);
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    }
    default:
      next(action);
  }
};

export default profileMiddleware;
