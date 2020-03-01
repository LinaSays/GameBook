import axios from 'axios';

import {
  GET_STORIES, showStories, GET_CATEGORIES, showCategory, GET_CATEGORY_STORIES, showCategoryStories,
} from 'src/store/reducer/home';
import { GET_HOME, showHome, loading } from 'src/store/reducer/signin';

import config from '../../../config';

const homeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STORIES: {
      axios.get(config.API_URI)
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
      axios.get(`${config.API_URI}/categories`)
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
      axios.get(`${config.API_URI}${window.location.pathname}`)
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
      axios.defaults.withCredentials = true;
      axios.get(`${config.API_URI}/checkToken`)
        .then((res) => {
          const save = showHome(res.data);
          store.dispatch(save);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          const save = loading();
          store.dispatch(save);
        });
      break;
    }
    default:
      next(action);
  }
};

export default homeMiddleware;
