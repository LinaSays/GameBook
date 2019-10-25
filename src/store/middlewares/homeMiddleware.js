import axios from 'axios';

import { GET_STORIES, showStories, GET_CATEGORIES, showCategory } from 'src/store/reducer/home';

const homeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STORIES: {
      axios.get('http://localhost:3000')
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
      axios.get('http://localhost:3000/categories')
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
    default:
      next(action);
  }
};

export default homeMiddleware;
