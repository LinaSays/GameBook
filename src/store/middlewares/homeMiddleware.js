import axios from 'axios';

import {
  GET_STORIES, showStories, GET_CATEGORIES, showCategory, GET_CATEGORY_STORIES, showCategoryStories,
} from 'src/store/reducer/home';
import { GET_HOME, showHome } from 'src/store/reducer/signin';

const API_URI = 'http://localhost:3000';

const homeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STORIES: {
      axios.get(API_URI)
        .then((response) => {
          const save = showStories(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case GET_CATEGORIES: {
      axios.get(`${API_URI}/categories`)
        .then((response) => {
          const save = showCategory(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case GET_CATEGORY_STORIES: {
      axios.defaults.withCredentials = true;
      axios.get(`${API_URI}${window.location.pathname}`)
        .then((response) => {
          const save = showCategoryStories(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case GET_HOME: {
      const state = store.getState();
      const { isConnected } = state.signin;
      axios.defaults.withCredentials = true;
      axios.get(`${API_URI}/checkToken`)
        .then((res) => {
          const save = showHome(res.data);
          store.dispatch(save);
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    }
    default:
      next(action);
  }
};

export default homeMiddleware;
