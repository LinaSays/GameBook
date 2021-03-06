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
  DELETE_PROFILE,
  deleteProfileFromDB,
  EDIT_PROFILE,
  editProfileFromDB,
} from 'src/store/reducer/profile';
import { CONNECT_USER, saveUser, CREATE_USER, saveNewUser } from 'src/store/reducer/signin';

import config from '../../../config';

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
        axios.post(`${config.API_URI}/profile/add`, {
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
      axios.get(`${config.API_URI}/profile`)
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
      axios.post(`${config.API_URI}/profile`, {
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
      axios.get(`${config.API_URI}/pins`)
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
      axios.get(`${config.API_URI}/readstories`)
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
      axios.get(`${config.API_URI}/wrotestories`)
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
    case DELETE_PROFILE: {
      axios.defaults.withCredentials = true;
      axios.delete(`${config.API_URI}/profile/delete`)
        .then((response) => {
          const save = deleteProfileFromDB(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.location.href = '/';
        });
      break;
    }
    case EDIT_PROFILE: {
      const state = store.getState();
      axios.defaults.withCredentials = true;
      const { user_name, email, password, avatar } = state.profile;
      axios.post(`${config.API_URI}/profile/edit`, {
        user_name, email, password, avatar,
      })
        .then((response) => {
          const save = editProfileFromDB(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          window.location.reload();
        });
      break;
    }
    default:
      next(action);
  }
};

export default profileMiddleware;
