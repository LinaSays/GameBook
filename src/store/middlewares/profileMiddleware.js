import axios from 'axios';
import { toast } from 'react-toastify';

import {
  GET_PROFILE,
  showProfile,
  GET_PINS,
  showPins,
  GET_READ_STORIES,
  showReadStories,
  GET_WROTE_STORIES,
  showWroteStories,
} from 'src/store/reducer/profile';
import { CONNECT_USER, saveUser, CREATE_USER, saveNewUser } from 'src/store/reducer/signin';

const API_URI = 'http://localhost:3000';

const profileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const state = store.getState();
      const { user_name, email, password, confirm, choice } = state.signin;
      if (user_name.length === 0) {
        toast.error('Veuillez saisir votre nom');
      }
      if (password === confirm) {
        axios.defaults.withCredentials = true;
        axios.post(`${API_URI}/profile/add`, {
          user_name, email, password, choice,
        })
          .then((response) => {
            const save = saveNewUser(response.data);
            store.dispatch(save);
            toast.success(`Bienvenue ${user_name}`);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
          });
      }
      else {
        toast.error('Votre mot de passe ne correspond pas');
      }
      break;
    }
    case GET_PROFILE: {
      axios.defaults.withCredentials = true;
      axios.get(`${API_URI}/profile`)
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
      const { email, password, connection } = state.signin;
      axios.post(`${API_URI}/profile`, {
        email,
        password,
        connection,
      })
        .then((response) => {
          if (email === response.data[0].email) {
            const actionSaveUser = saveUser(response.data);
            store.dispatch(actionSaveUser);
          }
          else {
            toast.error('Votre email ou le mot de passe ne correspondent pas');
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    }
    case GET_PINS: {
      axios.defaults.withCredentials = true;
      axios.get(`${API_URI}/pins`)
        .then((response) => {
          const save = showPins(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
        });
      break;
    }
    case GET_READ_STORIES: {
      axios.defaults.withCredentials = true;
      axios.get(`${API_URI}/readstories`)
        .then((response) => {
          const save = showReadStories(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
        });
      break;
    }
    case GET_WROTE_STORIES: {
      axios.defaults.withCredentials = true;
      axios.get(`${API_URI}/wrotestories`)
        .then((response) => {
          const save = showWroteStories(response.data);
          store.dispatch(save);
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
