import axios from 'axios';

import { GET_STORIES, showStories, GET_CATEGORIES, showCategory, GET_CATEGORY_STORIES, showCategoryStories } from 'src/store/reducer/home';
import { GET_HOME, showHome } from 'src/store/reducer/signin';

const homeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STORIES: {
      axios.get('http://api.gamebook.tech:3000')
        .then((response) => {
          const save = showStories(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    }
    case GET_CATEGORIES: {
      axios.get('http://api.gamebook.tech:3000/categories')
        .then((response) => {
          const save = showCategory(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    }
    case GET_CATEGORY_STORIES: {
      axios.defaults.withCredentials = true;
      axios.get(`http://api.gamebook.tech:3000${window.location.pathname}`)
        .then((response) => {
          const save = showCategoryStories(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    }
    case GET_HOME: {
      const state = store.getState();
      const { isConnected } = state.signin;
      axios.defaults.withCredentials = true;
      axios.get('http://api.gamebook.tech:3000/checkToken')
        .then(res => {
          if (res.status === 200) {
            const save = showHome(res.data);
            store.dispatch(save);
          }
          else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          return isConnected;
        });
      break;
    }
    default:
      next(action);
  }
};

export default homeMiddleware;
